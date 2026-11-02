# Requirements implementation and feedback traceability

Baseline 2 November 2026. Initial planning feedback received; follow-up review of the revised architecture pending. The tracker table dated 23 October 2026 in earlier reports is historical and is not a current implementation verdict.

| Requirements | Design evidence | Implementation/evaluation evidence | Proposed owner |
|---|---|---|---|
| FR-01/02/03/08; NFR-01/08/10 | Requirements, architecture flows, design handoff | Static original UI on main; corrected fixture/empty/contact states and limited viewport/keyboard/build checks on PR #21 (3138ce6), not merged | Bekbolat; Shugyla reviews |
| FR-04; NFR-03/11 | Session/CSRF/recovery rules, OpenAPI, T-03/09/13 | Backend absent; tests not executed | Olzhas |
| FR-05; NFR-02 | Actor/field access matrix, consent model, schema, public response, T-04 | Backend filtering/consent enforcement not implemented | Olzhas; Shugyla verifies |
| FR-06/07/09; NFR-05/09 | URL-only QR/NFC sequence, digest lifecycle, T-05/06/12 | QR/NFC controlled-access PoC and device evidence pending | Bekbolat + Olzhas; Shugyla tests |
| FR-10; NFR-13 | Deletion/retention design, schema, T-11 | Primary purge/backup restore not implemented or exercised | Olzhas |
| FR-11 | Input bounds/version/ownership rules, contract, T-07 | No backend write validation implemented | Olzhas |
| FR-12 | First-aid source/review process, T-14 | No approved local treatment content or clinical review | Shugyla coordinates qualified review |
| NFR-04/12 | Transport/storage/secret/audit rules, threat model, T-10 | No deployment/security certification; controls not tested | Olzhas + team |
| NFR-06/07 | Measured targets/evidence template and PR links | Performance/usability study not conducted; no fabricated Pass result | Team |

## Task assignments and acceptance

| Work item | Lead | Reviewer | Completion gate |
|---|---|---|---|
| Documentation baseline and report reconciliation | Bekbolat | Olzhas + Shugyla | Requirements, design, feedback status and report agree; rendered companions readable |
| Architecture and security review | Olzhas | Team + supervisor | Review ADRs, fields, recovery, retention and threats; record actual comments/date and disposition |
| Survey eligibility evidence | Bekbolat + Shugyla | Supervisor | Reconcile 30 consent answers/31 submissions from original records, dates and eligibility; recalculate only with evidence |
| Figma handoff | Shugyla | Bekbolat | Update source frames, one fictional dataset, consent/preview/lost-card/error flows and four clean exports |
| Controlled-access PoC | Olzhas + Bekbolat | Shugyla | Functional owner/public separation, QR/NFC URL lifecycle and negative access checks; record exact builds/devices |
| Verification execution | Shugyla coordinates | Whole team | T-01–T-14 executed as applicable with denominators, actual results and defect links |

Assignments are proposals matching reported roles, not evidence of teammate acceptance or external issue assignment. Use actual YouTrack IDs; branch names historically confuse EMIS-2 (Figma) and EMIS-5 (profile UI), so verify meaning before linking. Do not invent new tracker IDs.

## Evidence template

Test ID / requirement / issue / PR / build SHA / execution date / tester / device-OS-browser / network / fictional fixture / steps / expected / actual / Pass-Fail-Not executed-Blocked / evidence location / defect.

[feedback-response-matrix.md](feedback-response-matrix.md) maps SF-01–SF-07 to actual revisions. Documented, implemented, tested and approved are separate states. Initial teacher feedback is evidence of planning review, not approval of this revision or a finished system.

## Prioritized implementation handoff

| Priority | Exact intended file area | Work and gate | Lead |
|---|---|---|---|
| P0 review | docs/decisions.md, privacy-and-security.md, threat-model.md, data-model.md, openapi.yaml | Team/supervisor reviews selected target contract; record disposition without claiming final approval | Olzhas, Bekbolat |
| P0 setup | backend/pom.xml, backend/src/main/java/, backend/src/main/resources/db/migration/ | Create Spring Boot app and tested private-default schema; these paths do not exist yet | Olzhas |
| P0 access | backend security/profile packages and backend/src/test/ | Sessions/CSRF/ownership/validated writes/public allowlist; T-03/04/07/09/13 | Olzhas |
| P1 identifiers | backend identifier package; frontend/src/app/emergency/[publicId]/ and owner routes | Wire live public API, issue/rotate/revoke, QR/NFC same URL, no-cache/unavailable handling; T-05/06/12 | Olzhas + Bekbolat |
| P1 design | designs/ exports and Figma source; frontend owner/preview/error flows | Align fictional fixture and privacy/consent/lost-card workflow with approved scope | Shugyla + Bekbolat |
| P1 evaluation | docs/verification.md and actual evidence records | Execute applicable tests, record failures/denominators/builds; do not turn plans into Pass | Shugyla + team |
| P1 research | docs/research/survey-methodology.md and report Section 2 | Verify original records privately, then update approved aggregate denominators | Bekbolat + Shugyla |
| P2 optional | docs/content/first-aid-sources.md and later content routes | Qualified review of general resources before any clinical content publication | Shugyla |

Paths in this handoff are planned implementation locations, not files created by the documentation PR. Final Java package naming and deployment provider belong to the implementation review.
