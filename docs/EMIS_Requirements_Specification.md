# EMIS — Requirements Specification

**Project:** Design and Development of a Privacy-Aware QR/NFC-Based Emergency Medical Information System  

This is the canonical requirements specification. Report Section 6 uses these FR IDs; [requirements.md](requirements.md) preserves the legacy mapping. Implementation and review assignments are recorded in [traceability.md](traceability.md).

## 1. Purpose and scope

This document defines the proposed functional and non-functional requirements for EMIS and gives measurable acceptance criteria. EMIS aims to let a profile owner maintain self-reported emergency information and share only a deliberately limited emergency view through a QR/NFC-linked identifier. It is **not** a medical record, diagnostic tool, identity-verification service, or substitute for emergency services.

Requirements are preliminary and must be validated with potential users and the supervisor. All tests must use fictional or explicitly authorized synthetic data.

## 2. Actors and assumptions

- **Profile owner:** manages their own data and controls public visibility (planned authenticated workflow).
- **Emergency viewer:** accesses the intentionally public emergency view through a QR code, NFC link, or direct URL; does not log in.
- **System administrator/developer:** maintains the prototype but should not have unrestricted access to sensitive data by default.

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

| Test ID | Related requirements | Method | Pass condition |
|---|---|---|---|
| T-01 | FR-01, NFR-01 | Manual responsive/keyboard test | Profile remains readable and actionable at documented viewport sizes. |
| T-02 | FR-02, FR-03, NFR-08 | Inspect synthetic public profile | Only configured fields display; unverified-data notice is visible. |
| T-03 | FR-04, NFR-03 | API integration tests | Owner can edit own profile; anonymous/other-user updates fail. |
| T-04 | FR-05, NFR-02 | Public API contract test | Private field never appears in public JSON or HTML. |
| T-05 | FR-06, FR-07 | Device scan test | QR and supported NFC route to intended public view. |
| T-06 | FR-09, NFR-05 | Revocation/invalid-token test | No medical data returned for revoked or unknown link. |
| T-07 | FR-11, NFR-04 | Input and configuration review | Invalid input rejected; no exposed secrets; HTTPS configured where deployed. |
| T-08 | NFR-06, NFR-09 | Timed load and failure simulation | Measured target met or limitation documented; safe error shown. |

**Baseline:** compare the prototype against a static emergency-information card or a manually opened demo profile for task completion, readability, and number of steps. Baseline and measurement conditions require supervisor approval.

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

## 10. Open decisions requiring review

These decisions remain open. Documentation alignment does not approve an authentication design, finalize retention rules, or implement security controls. Record reviewed decisions separately before backend integration.

- Exact public/private field list and visibility defaults.
- Owner authentication method and account recovery.
- Public-link identifier design, expiration, revocation, and card-loss process.
- Database schema and retention/deletion rules.
- Whether NFC is required for the first integrated prototype or remains a later enhancement.
- Actual usability/performance targets after user interviews and baseline measurements.

## 11. Change control

Each requirement change should include a rationale, priority, acceptance-criteria update, and associated YouTrack issue/PR. The team and supervisor should review this draft before it is treated as a finalized specification.
