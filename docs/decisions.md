# Architecture decisions

Design baseline dated 2 November 2026. These are selected target-prototype decisions for team and supervisor review. They are documented here, not deployed or independently approved. Baseline implementation remains a static Next.js page; PR #21 contains separately tested UI corrections.

| ID | Decision | Rationale and consequence | Verification |
|---|---|---|---|
| ADR-01 | Keep Next.js/React/TypeScript; use Java/Spring Boot/Maven and PostgreSQL for the target API | Matches report Section 5 and assigned backend skills. Backend source is still absent | Backend setup and migration checks before integration |
| ADR-02 | One public HTTPS origin, with /api routed to Spring Boot; database reachable only on a private network | Avoids cross-origin session complexity; a reverse proxy terminates HTTPS and routes requests | Deployment routing, TLS and private database-access tests |
| ADR-03 | Anonymous public view plus authenticated owner management; no clinician or contact privilege tier | A scan identifies a shared summary; it does not authenticate a responder or prove patient identity | Anonymous/owner A/owner B authorization matrix |
| ADR-04 | Explicit publication consent and private defaults; backend projects only an allowlist | Frontend hiding cannot prevent data exposure. No publication or new field is public by default | Public JSON, HTML and client-data inspection |
| ADR-05 | QR and NFC contain the same managed HTTPS URL with a 256-bit random opaque identifier | No health values or owner credentials on the card. A copied URL remains usable until revoked | QR/NFC payload inspection, device and copied-link tests |
| ADR-06 | Store SHA-256 identifier digests; return the raw URL only at issuance/rotation; one active identifier per profile | Database does not retain the printable secret. Reprinting without a saved card requires rotation and invalidates old cards | Transactional rotation/revocation and concurrency tests |
| ADR-07 | Use server-managed Spring Security sessions persisted by Spring Session JDBC | No owner bearer tokens in localStorage or QR payloads. Session cookie is Secure, HttpOnly, SameSite=Lax, Path=/, with __Host- prefix and no Domain | Cookie flags, CSRF, fixation, logout and expiry checks |
| ADR-08 | Hash passwords using Argon2id; implement bounded, single-use recovery tokens | Owner authentication is separate from public identifiers. Recovery invalidates sessions and public identifiers | Password/recovery and enumeration tests |
| ADR-09 | Do not cache medical responses at browser application, Next.js data, service worker or CDN layers | New reads must observe visibility and revocation changes. Previously copied information cannot be recalled | Cache-header and before/after revocation tests |
| ADR-10 | No offline health-record feature in the first integrated prototype | A URL-only tag cannot fetch a hosted record without connectivity. Card keeps a printed emergency-services instruction and QR fallback | Offline/unavailable tests and physical-card inspection |
| ADR-11 | Immediate public disablement on deletion; primary purge within 24 hours; encrypted backups expire within 30 days; minimal audit events expire in 30 days | These are prototype operational targets, not assertions of legal compliance. Restore must replay deletion records before serving traffic | Deletion, scheduled cleanup and restore exercises |
| ADR-12 | Keep first-aid content optional and editorially reviewed; no diagnosis or individualized treatment | FR-12 is Could scope. No clinical content is approved by architecture documentation | Source/reviewer/date record before publishing content |

Detailed access policy: [privacy-and-security.md](privacy-and-security.md). Schema: [data-model.md](data-model.md). Flows: [architecture.md](architecture.md). Tests: [verification.md](verification.md).

## Remaining approval and evidence work

The supervisor's initial feedback recommends requirements analysis and prototyping; it does not approve this revised architecture. Request follow-up review of these decisions, clinical field selection, the usability baseline and operational targets. Select a hosting provider, SMTP/recovery provider and exact compatible backend versions at implementation time. NFC remains Should in the specification, but the teacher's requested QR/NFC proof of concept is pending until both are demonstrated or deferral is explicitly agreed.

Technical references checked 2 November 2026: OWASP [sessions](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html), [password storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html), [authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html), and [logging](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html). Numeric timeouts and retention periods above are EMIS design choices, not values mandated by those references.
