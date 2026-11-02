# Supervisor feedback response matrix

Initial planning feedback: received from the team on 2 November 2026; original review date not supplied. Follow-up review of the revised design: pending. The preserved feedback is in [supervisor-feedback.md](supervisor-feedback.md). Documented below means the revision exists, not that software was implemented, tested or approved.

| Comment | Completed documentation revision | Requirement and report mapping | Outstanding work and lead |
|---|---|---|---|
| SF-01 target users and use cases | architecture.md defines owner/patient, anonymous responder/bystander, contact and operator, with use-case and sequence diagrams; contacts gain no app privilege | FR-01/04/08; report Sections 1, 6 and 7 | Team/supervisor validates scenarios; Bekbolat coordinates |
| SF-02 privacy and access | privacy-and-security.md defines actor access matrix, opt-in field allowlist, consent evidence, withdrawal and backend projection; data-model.md defines private defaults | FR-05/09, NFR-02/03; Sections 6 and 7 | Olzhas implements filtering/ownership; Shugyla verifies public payloads and privacy UX |
| SF-03 QR/NFC workflow | architecture.md documents URL-only QR/NFC, native-reader flow, digest storage, one-time issuance, copied/lost-card revoke/rotate and limits | FR-06/07/09; Section 7 | Bekbolat + Olzhas build PoC; Shugyla tests physical devices; NFC checkpoint evidence pending |
| SF-04 security and protection | decisions.md and privacy-and-security.md select sessions, password/recovery handling, CSRF, TLS/storage protection, log minimization, expiry/deletion; threat-model.md identifies abuse cases | NFR-03/04/11/12/13; Sections 6 and 7 | Olzhas implements controls; integrated security tests not executed |
| SF-05 emergency usability/reliability | architecture.md defines anonymous emergency access, connectivity/card failure and owner-authentication failure; verification.md defines responsive, usability and timed-load targets | FR-01/02/03, NFR-01/06/08/09; Sections 7, 8 and 9 | Shugyla synchronizes Figma and tests users/devices; PR #21 has only partial static UI checks |
| SF-06 first-aid resources | content/first-aid-sources.md defines general-information scope, IFRC candidate reference and qualified review gate; no treatment instructions added | FR-12 Could; Sections 6 and 9 | Shugyla obtains source-specific qualified review before any clinical content release |
| SF-07 verification | verification.md specifies T-01–T-14, measurable targets, baseline and evidence fields; traceability.md separates plans and executions | All FR/NFR; Section 9 | Whole team executes integrated tests; supervisor reviews study protocol |

## Requested checkpoint deliverables

| Requested deliverable | Current evidence | Honest completion status |
|---|---|---|
| Formal FR/NFR specification | EMIS_Requirements_Specification.md and report Section 6 | Document revised; stakeholder/follow-up review pending |
| Use cases, architecture, database and user flows | architecture.md, data-model.md, diagrams/, architecture Word companion and report Section 7 | Target design documented; implementation not completed |
| Threat model and privacy strategy | threat-model.md, privacy-and-security.md, decisions.md | Documented target baseline; review/implementation pending |
| Figma patient and emergency workflow | Linked source and historical screenshots in report Section 8 | Existing concepts; synchronized frames and clean exports still pending |
| QR/NFC controlled-access PoC | API/flow contracts only | Not implemented or demonstrated; no completion claim |
| Test plan with measurable criteria | verification.md, verification Word companion and report Section 9 | Plan documented; integrated execution pending |

## Commission finding and correction

The earlier project-management table said supervisor feedback was “to be collected,” while Section 11 described a positive completed review and repeated passages. Both are replaced with one consistent statement: initial planning feedback received; follow-up review of this revised baseline pending. The supplied initial comments are preserved once in Section 11, followed by this response mapping. No final supervisor approval, review date, implemented PoC or passing security result has been invented.
