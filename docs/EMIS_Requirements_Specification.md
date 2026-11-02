# EMIS — Requirements Specification

**Project:** Design and Development of a Privacy-Aware QR/NFC-Based Emergency Medical Information System  

This is the canonical requirements specification. Report Section 6 uses these FR IDs; [requirements.md](requirements.md) preserves the legacy mapping. Implementation and review assignments are recorded in [traceability.md](traceability.md).

## 1. Purpose and scope

This document defines the proposed functional and non-functional requirements for EMIS and gives measurable acceptance criteria. EMIS aims to let a profile owner maintain self-reported emergency information and share only a deliberately limited emergency view through a QR/NFC-linked identifier. It is **not** a medical record, diagnostic tool, identity-verification service, or substitute for emergency services.

This version incorporates the supplied initial planning feedback and the selected target architecture dated 2 November 2026. Follow-up review of the revised baseline remains pending. All demonstrations and tests use fictional profiles; the 31-submission survey remains subject to consent/eligibility verification.

## 2. Actors and assumptions

- **Profile owner:** manages their own data and controls public visibility (planned authenticated workflow).
- **Emergency viewer:** accesses the intentionally public emergency view through a QR code, NFC link, or direct URL; does not log in.
- **Trusted emergency contact:** may receive a call; listing a contact grants no application authorization.
- **System administrator/developer:** maintains infrastructure without a routine patient-browsing application role. Privileged database/service operators may still have technical access; no end-to-end encryption is claimed.

**Assumptions:** a viewer has a compatible phone and internet access; the information is self-reported and may be inaccurate; a printed QR code or NFC link may be copied or shared. Emergency use must not depend on EMIS availability.

## 3. Prioritization

**Must:** essential for the target prototype and its safety/privacy model.  
**Should:** important for quality, but may follow the first integrated release.  
**Could:** optional enhancement.  

The priority describes the **target prototype**, not what is already implemented.

## 4. Functional requirements

| ID | Priority | Requirement | Acceptance criteria / verification |
|---|---|---|---|
| FR-01 | Must | Display a readable, mobile-friendly emergency profile. | Given a valid demo emergency URL, the page displays the configured public fields at 375 px and desktop widths without horizontal scrolling; manually inspect and test. |
| FR-02 | Must | Show essential self-reported emergency details (e.g., allergies, conditions, relevant medications, emergency contact), where provided. | For synthetic profiles with populated and missing optional fields, the page displays only populated permitted values and clear empty-state text where appropriate. |
| FR-03 | Must | Clearly distinguish user-provided information from verified medical advice. | The emergency view visibly states that information is self-reported/unverified and must not replace professional assessment. |
| FR-04 | Must | Allow an owner to create and edit a profile through an authenticated workflow. | A signed-in test owner can save and retrieve changes; a signed-out user cannot invoke owner edit operations. **Planned.** |
| FR-05 | Must | Let an owner select which fields are visible in the public emergency view. | Change a synthetic field from public to private; confirm it is absent from the public API response and rendered view, but remains visible to the authorized owner. **Planned.** |
| FR-06 | Must | Provide a QR code that opens the intended limited emergency view. | Scan a generated test QR code on two compatible devices and confirm the expected profile route opens. **Planned.** |
| FR-07 | Should | Support NFC tags that open the same limited emergency view. | Read a programmed test NFC tag with a compatible device and confirm it resolves to the same authorized public route. **Planned.** |
| FR-08 | Must | Display a configured emergency contact action. | With a valid synthetic contact number, activating the contact control invokes the device's telephone handler; no automatic call is initiated. |
| FR-09 | Must | Support a revoked or unavailable emergency link without exposing private data. | After revoking a synthetic link, an unauthenticated request returns a neutral unavailable response and no profile fields. **Planned.** |
| FR-10 | Should | Allow an owner to update or remove their profile. | An authenticated test owner can modify or request deletion of their synthetic record; subsequent reads reflect the change according to documented retention rules. **Planned.** |
| FR-11 | Should | Validate submitted profile data. | Invalid or excessively long input is rejected with helpful errors; valid input is stored without executable markup being rendered. **Planned.** |
| FR-12 | Could | Provide general first-aid information from reviewed sources. | Guidance is clearly labeled as general information, references its source, and directs users to emergency services; no personalized diagnosis is generated. **Planned.** |

## 5. Non-functional requirements

| ID | Priority | Requirement | Acceptance criteria / verification |
|---|---|---|---|
| NFR-01 | Must | Responsive and accessible interface. | Check keyboard navigation, visible focus, labeled actions, readable contrast, and 375 px/768 px/desktop layouts; document issues found. |
| NFR-02 | Must | Privacy by default. | New sensitive fields are not public unless intentionally selected; test public API payloads and rendered pages for private-data leakage. **Planned.** |
| NFR-03 | Must | Authorization on owner-only operations. | Unauthenticated and other-user requests to read/update private records are rejected; integration tests cover both cases. **Planned.** |
| NFR-04 | Must | Secure transport and secret handling. | Production-like deployment uses HTTPS; no passwords, access tokens, or real medical records are committed to Git; inspect repository and deployment configuration. **Planned.** |
| NFR-05 | Must | Safe error behavior. | Invalid, revoked, and unknown public identifiers do not disclose whether a private patient record exists or reveal sensitive details. **Planned.** |
| NFR-06 | Should | Reasonable page performance. | Under documented test conditions, the emergency view becomes usable within 3 seconds for at least 90% of test loads; record device/network and results. **Target, not measured.** |
| NFR-07 | Should | Maintainability and traceability. | Requirements link to YouTrack issues, code changes use task-linked PRs, and API/data model changes are documented. |
| NFR-08 | Must | Data accuracy transparency. | Every emergency view contains a visible self-reported/unverified-data notice and does not claim clinical validation. |
| NFR-09 | Should | Reliability and graceful failure. | Simulated backend or network failure shows a clear unavailable state without fabricated medical details; emergency-services guidance remains understandable. **Planned.** |
| NFR-10 | Must | Use synthetic test data for academic demonstrations. | Review demonstration fixtures, screenshots, and repository files to ensure no real person's health information is disclosed without authorization. |
| NFR-11 | Must | Protect owner sessions and recovery. | Enforce server-side session expiry, fixation protection, logout/reset invalidation and CSRF; recovery uses separate single-use expiring tokens. Verify with T-09/T-13. Planned. |
| NFR-12 | Must | Minimize and protect audit records. | Record required event categories without health values, raw identifiers, credentials or contact details; restrict access and verify with T-10. Planned. |
| NFR-13 | Should | Apply documented deletion and retention rules. | On account deletion deny access immediately, purge primary data within 24 hours, expire audit/backups within 30 days and replay deletions before restore exposure. T-11. Planned prototype targets. |

## 6. Key use cases

**UC-01 — View emergency profile:** viewer scans QR/NFC or opens URL → system resolves public identifier → system returns only allowed fields → viewer sees information and an unverified-data notice. Alternate flow: invalid/revoked identifier → neutral unavailable page.

**UC-02 — Manage profile (planned):** owner signs in → edits information and visibility preferences → validates and saves → reviews public preview. Alternate flow: unauthenticated request → access denied.

**UC-03 — Revoke a link (planned):** owner revokes a shared emergency link → future requests to that identifier return no medical data → owner may generate a replacement link.

## 7. Privacy and safety rules

1. Do not place full medical records, passwords, or secret keys directly on a QR code or NFC tag.
2. Treat a public emergency link as potentially copyable; a hard-to-guess identifier is not equivalent to owner authentication.
3. Apply field-level filtering on the **backend**, not only by hiding elements in the frontend.
4. Avoid collecting or exposing more data than the emergency use case requires.
5. Use fictional sample profiles in screenshots and tests. Real medical information requires additional consent, legal, ethics, and security review.
6. Do not imply that scanning a card verifies identity or that user-provided data is clinically verified.

## 8. Acceptance and test plan

[verification.md](verification.md) is the canonical detailed plan, T-01–T-14. It preserves T-01–T-08 and adds session/CSRF, audit/leakage, deletion/restore, abuse/lifecycle, recovery and first-aid checks. Targets are not passing results. [traceability.md](traceability.md) records source and PR evidence separately.

The performance target remains at least 90% of documented loads usable within 3 seconds. Device scanning, task completion/time, negative access checks and privacy payload inspection have explicit denominators and conditions in the plan. Research protocols and target thresholds require follow-up review before execution.

## 9. Traceability and current status

| Area | Related YouTrack work | Current reported status |
|---|---|---|
| Frontend setup | EMIS-1 | Done |
| Figma emergency profile | EMIS-2 | Done |
| Frontend emergency profile UI | EMIS-5 | Done |
| UI/UX design documentation | EMIS-6 | Done |
| Backend architecture plan | EMIS-8 | Done (documentation only) |
| Spring Boot backend setup | EMIS-3 | Backlog / not completed |
| Emergency profile API | EMIS-7 | Backlog / not completed |

**Important:** 'Done' in YouTrack is not evidence that all acceptance tests above pass. Functional verification must be recorded separately. This table reflects the project status reported on 23 October 2026 and should be updated when tasks change.

## 10. Architecture baseline and remaining review

[decisions.md](decisions.md) records selected target decisions ADR-01–ADR-12 for public fields, same-origin owner sessions, random revocable identifiers, schema, retention and offline limits. [architecture.md](architecture.md), [privacy-and-security.md](privacy-and-security.md), [data-model.md](data-model.md) and [api-contract.md](api-contract.md) define their contract. These documents are implementation requirements, not implemented controls or final supervisor approval.

Remaining review covers clinical field suitability, study targets/protocol, infrastructure/provider/version selection and the updated design. NFC remains Should, while the teacher's requested QR/NFC checkpoint demonstration is outstanding until both mechanisms are tested or deferral is explicitly agreed.

## 11. Change control

Each requirement change should include a rationale, priority, acceptance-criteria update, and associated YouTrack issue/PR. The team and supervisor should review this draft before it is treated as a finalized specification.

## 12. Detailed acceptance rules

FR-04 follows the authentication/session/recovery design in privacy-and-security.md. FR-05 publishes only owner-selected populated allowlisted fields after explicit consent, with new fields private. FR-06/07 store only the same HTTPS URL on QR/NFC. FR-09 uses neutral unavailability and transactionally revocable identifiers; a subsequent read after acknowledged revocation must not return health data. FR-10 includes explicit account-closure semantics and retention rules. FR-11 validation is mandatory for any implemented write even though the broader feature is Should. First-aid content remains gated by reviewed sources.

The actor access matrix, field list, validation bounds, rate limits, session timeouts and API errors are normative target details in the linked design documents. Report Section 6 mirrors the FR/NFR IDs and points to these details. Update all companions together when the design changes.
