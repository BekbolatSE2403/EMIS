# Privacy and security design

Target design, 2 November 2026. No backend controls described here are implemented yet. Decisions are recorded in [decisions.md](decisions.md); threats and residual risks are recorded in [threat-model.md](threat-model.md).

## Actors and authorization

| Actor | Public summary | Private data | Change, publish, revoke or delete |
|---|---|---|---|
| Anonymous viewer or responder with an active URL | Owner-approved allowlisted fields only | Denied | Denied |
| Signed-in owner | Same public view plus own private management view | Own record only | Own record only; sensitive actions require authentication within the last 5 minutes |
| Different signed-in owner | Same public fields as anyone with the URL | Denied | Denied |
| Listed emergency contact | May receive a call; has no special application role | Denied unless separately the owner of that record | Denied |
| Operator/developer | Operational metrics and restricted audit access | No patient-browsing application endpoint | No routine profile-management privilege |

Database/service operators can potentially access plaintext while operating the application. Encryption at rest does not make the design end-to-end encrypted. Real-patient deployment would require additional governance and review.

## Public-field allowlist and consent

An owner can explicitly publish a display name or alias, reported blood type, selected allergy entries, selected condition entries, selected medication entries and selected emergency contacts. All flags default to false. Each contact's name/relationship/phone is published as one approved entry; the owner must acknowledge permission to share the third party's contact details. This acknowledgement is not independent verification of that permission.

Account email, password/recovery material, owner IDs, internal profile IDs, private entries, sessions, audit records, birth date, address and medical documents are never in the public response. Birth dates, addresses and full medical documents are outside the prototype's collection scope.

The owner sees the public preview and an explanation that anyone holding or copying the URL may view the selected fields. Publishing records the privacy-notice version and acceptance time and requires at least one selected populated field. A material expansion of the disclosure scope requires renewed consent. Saving a new sensitive field does not automatically publish it. Withdrawal atomically disables publication and revokes the active identifier; later publication requires a new identifier. Anonymous readers do not supply consent on the owner's behalf.

The public response contains only published populated values plus lastUpdatedAt and an unverified-data notice. It does not list hidden field names, withheld counts or account metadata. Missing medical information is not represented as absence of a condition or medication. Blood type is self-reported and is not a basis for transfusion decisions.

## Owner authentication and sessions

Select Spring Security form/JSON login with server-side sessions and Spring Session JDBC storage. Passwords use salted Argon2id with at least 19 MiB memory, 2 iterations and parallelism 1, benchmarked before use. Accept 15–128 character passwords including spaces; never silently truncate. Store only password hashes.

Use a random session ID in a __Host-EMISSESSION cookie with Secure, HttpOnly, SameSite=Lax and Path=/; omit Domain and persistent remember-me behavior. Rotate the session after authentication. Enforce a 15-minute idle timeout and 8-hour absolute lifetime on the server. Logout, password reset, account deletion and suspected compromise invalidate server sessions and clear the cookie. No owner session or password is placed in URLs, browser localStorage or physical cards.

Unsafe requests, including login and registration, require Spring Security's synchronizer CSRF token in a header. SameSite is additional protection rather than a replacement. CORS does not allow arbitrary origins; the selected deployment uses one origin. Repeat login to refresh the five-minute recent-authentication interval; obtain a fresh CSRF token after session rotation. Require ownership checks in the service/repository operation, not only at route level. /api/me identifies the account from the session, never a client-supplied ownerId.

Email registration/recovery is a target workflow whose delivery provider is not yet selected. Verification and recovery links use independent 32-byte random, hashed-at-rest, single-use tokens with 30-minute expiry. Responses do not reveal whether an account exists. Reset completion invalidates all sessions and public identifiers, requiring the owner to reissue cards. Recovery failures never grant access to private data.

## Identifier and disclosure controls

Use a SecureRandom 32-byte token, base64url encoded without padding (43 characters). Store only its SHA-256 digest. Issuance and rotation return the raw public URL once; owner lists never echo the raw value. An owner who loses the saved printable card must rotate to reprint. The old QR and NFC URL then stop working. Rotation is one database transaction with a unique constraint preventing two active identifiers. No automatic expiry is selected for cards; explicit revocation, account disablement and consent withdrawal remain authoritative.

Validate token format, active account/profile/publication state and current visibility on every public read. Malformed, unknown, disabled and revoked URLs use the same neutral 404 response without health information. Availability failures use a generic 503 state, without a fallback medical fixture. Per-IP rate limits start at 60 public requests/minute and login/recovery limits at 10/account and 20/IP per 15 minutes, with generic 429 responses. These configurable prototype limits need shared-network testing; they are not a guarantee of emergency availability.

Use Cache-Control: no-store for health responses and pages, skip Next.js/application/CDN caches, avoid service-worker storage, and clear displayed health information on a page restored from browser history until a fresh read succeeds. A page left open or information photographed/copied before withdrawal cannot be recalled. Tests must distinguish subsequent server reads from pre-existing copies.

Use noindex/nofollow, Referrer-Policy: no-referrer, a restrictive self-hosted Content Security Policy and no third-party analytics on medical routes. Indexing restrictions are not authorization. Proxy/access logs must use route templates or suppress sensitive paths, including malformed attempts; never log raw URLs, identifiers, cookies, recovery tokens or medical payloads.

## Encryption, audit and retention

Require HTTPS/TLS 1.2 or newer for external traffic, verified TLS where application/database traffic crosses a network, encrypted persistent volumes and encrypted backups. Encryption keys live outside source control and outside database backups, in the deployment's managed secret/key service. Least-privilege runtime database credentials cannot administer roles or backups. No real credentials belong in examples.

Audit successful/failed owner authentication, profile changes, consent/visibility changes, identifier issuance/revocation, deletion and public-read outcome categories. Events contain server time, event type, outcome, request correlation ID and minimal internal actor/resource references. They exclude changed medical values, raw URLs/tokens, contact details and passwords. Restrict audit access and protect the event store from ordinary profile edits; do not claim immutable logging without implementation evidence. IP rate-limit keys are transient, not permanent access-history records.

Deletion immediately disables public access and sessions. Purge the account/profile/contact/medical records from the primary database within 24 hours; retain a restricted deletion job containing only opaque account references for backup replay for at most 30 days after purge. Backups expire within 30 days. A restore stays private until deletion jobs are reapplied. Audit references to deleted records are cleared and events expire within 30 days. Retention limits are proposed prototype operations, subject to review before any real data use.

## References

Design rationale: OWASP [authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html), [sessions](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html), [password storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html), [logging](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html), checked 2 November 2026. EMIS-specific thresholds require evaluation. This document does not certify compliance or clinical suitability.
