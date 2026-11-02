# Verification and evaluation plan

Target plan, 2 November 2026. No integrated/backend/device tests have been executed. Static UI checks from PR #21 are recorded separately in that PR's frontend/PROTOTYPE_REVIEW.md and do not satisfy integrated security requirements.

| Test | Requirements | Procedure and measurable acceptance | Status |
|---|---|---|---|
| T-01 | FR-01, NFR-01 | 375/768/1280 px, 200% zoom, keyboard and screen-reader review; no horizontal overflow, trapped focus or unlabeled action; assess WCAG 2.2 AA contrast | Planned; PR #21 has partial viewport/keyboard evidence |
| T-02 | FR-02/03/08, NFR-08/10 | Synthetic populated/missing profiles; unverified notice and update date visible; missing data not asserted as absence; displayed contact equals tel target, no automatic call | Planned integration; partial static checks in PR #21 |
| T-03 | FR-04, NFR-03 | Anonymous and owner B attempt owner A reads/updates/deletes/child edits/revocations; zero unauthorized successes, owner A valid action succeeds | Not executed |
| T-04 | FR-05, NFR-02 | Set all sensitive fields private, vary each flag and inspect public JSON, HTML, client data and preview; zero private values/internal IDs disclosed; new entries remain private | Not executed |
| T-05 | FR-06/07 | QR: 10 attempts on each of 2 documented camera-capable phones, at least 9/10 correct openings on each and zero wrong profiles; NFC: 10 taps on each of 2 compatible documented phones, same criterion | Not executed; hardware checkpoint remains pending |
| T-06 | FR-09, NFR-05 | Valid, malformed, unknown, revoked and disabled links; neutral 404 without medical data for failures; subsequent requests after acknowledged revocation/visibility change use current state, including caches and browser-history restore | Not executed |
| T-07 | FR-11, NFR-04 | Oversized/invalid values, foreign child IDs, unknown properties, HTML payload and stale versions; reject invalid writes, escape text and reject stale updates with 409 | Not executed |
| T-08 | NFR-06/09 | Under recorded 150 ms latency, 1.6 Mbps down/750 kbps up and named browser/device, 30 cold loads per viewport: at least 27/30 usable within 3 seconds; simulate API/offline failure with clear unavailable state and no demo fallback | Not measured |
| T-09 | FR-04, NFR-03/04/11 | Cookie flags, fixation rotation, missing/invalid CSRF, logout, reset, 15-minute idle and 8-hour absolute expiry; all unauthorized actions denied server-side; no session token in URLs/storage | Not executed |
| T-10 | NFR-04/12 | Inspect TLS/storage/key access and canary medical values/tokens across logs, analytics and caches; zero canaries exposed; restricted runtime/audit access | Not executed |
| T-11 | FR-10, NFR-02/04/13 | Account deletion immediately denies public/owner reads; primary purge within 24 hours; audit/backup expiry within 30 days; restored snapshot stays private until deletions replayed | Not executed |
| T-12 | FR-06/07/09, NFR-09 | Copied link works only while deliberately public; old QR and NFC fail after rotate; concurrent issuance leaves one active identifier; configured rate caps return generic 429; damaged/offline cases show safe fallback | Not executed |
| T-13 | FR-04, NFR-03/04/11 | Verification/recovery tokens expire after 30 minutes, are single-use and separate from card IDs; neutral request responses; reset invalidates sessions and public identifiers | Not executed |
| T-14 | FR-12 | Before any first-aid text release: source/version, named qualified review, review date and general-information label present; no personalized treatment logic | Not conducted; Could scope |

## Usability study and baseline

Before recruitment obtain the required supervisor/ethics agreement. Plan at least five consenting adult participants using fictional profiles, record roles and eligibility, and avoid emergency patients. Each participant locates a critical allergy, determines whether medication information is supplied and finds the emergency-contact action. Compare EMIS with an equivalent static text card; counterbalance order and use equivalent scenarios to reduce learning effects.

Proposed targets are at least 90% successful tasks overall and median time at most 15 seconds per information-location task from a usable page. Record mistakes and 1–5 ease ratings. Separately measure QR/NFC scan-to-usable-page time. Thresholds and sample size are design targets requiring review, not established outcomes; a small convenience study cannot establish clinical effectiveness.

## Evidence record

For each executed case record ID, canonical requirement, exact commit/build, date, tester, participant consent where relevant, device/OS/browser, network settings, input fixture, steps, expected outcome, actual outcome, result, evidence path and defect/PR link. Use Pass/Fail/Not executed/Blocked with a reason; never equate Planned or a Done tracker issue with Pass. Record actual denominators and failures, not only screenshots of successful runs.

Supervisor review status is consistent throughout: initial planning comments received; follow-up review of this revised baseline is pending. The comment-to-revision mapping is in [feedback-response-matrix.md](feedback-response-matrix.md).
