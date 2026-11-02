# API contract

Target contract version 0.2, 2 November 2026. These endpoints are not implemented. Machine-readable shape: [openapi.yaml](openapi.yaml). All routes below are beneath the same-origin /api prefix. Decisions: [decisions.md](decisions.md).

| Method and path | Access | Behavior |
|---|---|---|
| GET /public/profiles/{publicId} | Anonymous | Dedicated filtered summary; neutral 404 for invalid/unknown/revoked/disabled; no-store |
| GET /auth/csrf | Anonymous or owner | Session-associated CSRF token; no health data; no-store |
| POST /auth/register | CSRF; rate limited | Start email verification, generic 202; provider selection pending |
| POST /auth/verify | CSRF; one-time verification token | Activate account after validation; consume token |
| POST /auth/login | CSRF; rate limited | Authenticate and rotate session; no owner token in JSON |
| POST /auth/logout | Owner + CSRF | Invalidate session and expire cookie |
| POST /auth/recovery/request | CSRF; rate limited | Generic 202 independent of account existence |
| POST /auth/recovery/complete | CSRF + single-use recovery token | Reset password; invalidate sessions and identifiers |
| GET /me/profile | Owner | Own private/editable profile; no-store |
| PUT /me/profile | Owner + CSRF | Create/update validated own data with version precondition; newly created entries private |
| PATCH /me/profile/visibility | Owner + CSRF + recent authentication | Set entry/scalar visibility and publication consent; withdrawal revokes identifier |
| DELETE /me/profile | Owner + CSRF + recent authentication | Delete account/profile workflow; immediate access disablement, purge queued; 202 |
| GET /me/identifiers | Owner | Internal identifier-management IDs/status only; never raw token |
| POST /me/identifiers | Owner + CSRF + recent authentication | Issue once after consent; 409 if active identifier exists; 201 URL returned once |
| POST /me/identifiers/{identifierId}/rotate | Owner + CSRF + recent authentication | Atomic revoke/new issuance; 201 URL once |
| DELETE /me/identifiers/{identifierId} | Owner + CSRF + recent authentication | Revoke owned identifier; 204; no other-owner lookup disclosure |

Recent authentication means within 5 minutes; repeat POST /auth/login with valid credentials and a current CSRF token to refresh authentication, rotate the session and obtain a fresh CSRF token. Profile DELETE is explicitly account closure for this prototype; it must say so in the owner confirmation UI. It is not an anonymous deletion endpoint. /me always derives ownership from the session; client owner IDs are rejected. Child-entry IDs must belong to the same profile.

## Public projection

Successful output has lastUpdatedAt and informationStatus=self-reported-unverified, plus only selected populated displayName, bloodType, allergies, conditions, medications and emergencyContacts. No owner/internal profile IDs, password/session material, private field values or hidden-field names. Public arrays contain values, not editable entity IDs. Every response/page uses no-store and the public UI must not fabricate a medical fallback.

## Writes and errors

Owner update bodies carry a profile version (0 for first creation); server update conflicts return 409. New child IDs are generated server-side. Existing child IDs are ownership-checked. Visibility changes carry the current version, approved field/entry selections and, when publishing, privacy-notice version plus explicit acknowledgement. Unselected data remain private. The server supplies consent timestamps and validates notice versions.

401 indicates no owner session, 403 CSRF or recent-authentication failure, 404 unavailable resource, 409 version/active-identifier conflict, 422 invalid input/consent, 429 configured throttling and 503 service unavailable. Public 404 bodies are identical across identifier failure reasons. Errors contain an application code and safe message, never stack traces, submitted health values or identifiers. Unknown body properties are rejected. No raw URL, request body or credential enters logs.

No real patient data appears in examples. OpenAPI is a design artifact; parsing it does not prove that endpoints exist or authorization works.
