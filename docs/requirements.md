# Requirements index and legacy ID migration

[EMIS_Requirements_Specification.md](EMIS_Requirements_Specification.md) is the canonical specification. Report Section 6 uses its functional requirement IDs. This file previously defined conflicting IDs and now provides migration guidance only. References to an old ID must include the old requirement's meaning before conversion.

## Legacy functional IDs

| Previous ID and meaning in this file | Canonical mapping and qualification |
|---|---|
| FR-01 registration/login | FR-04 owner workflow; account registration and recovery details remain to be specified |
| FR-02 profile creation/update | FR-04; FR-10 update/removal lifecycle |
| FR-03 medical information management | FR-02 display; FR-04 authenticated management; FR-11 validation |
| FR-04 emergency contact management | FR-04 management; FR-08 contact action |
| FR-05 unique QR/NFC identifier | FR-06 QR; FR-07 NFC; FR-09 revoked/unavailable links; identifier generation design remains open |
| FR-06 QR/NFC opening | FR-06 QR and FR-07 NFC |
| FR-07 public visibility settings | FR-05; NFR-02 private defaults |
| FR-08 private-data restriction | NFR-03 authorization; FR-05 public filtering |
| FR-09 emergency calling | FR-08 contact action; retain existing emergency-services action and test it separately |
| FR-10 first-aid references | FR-12, Could scope |
| FR-11 deactivate/replace identifiers | FR-09; replacement lifecycle design remains open |

## Legacy non-functional IDs

| Previous ID and meaning in this file | Canonical mapping |
|---|---|
| NFR-01 mobile support | NFR-01 responsive/accessibility |
| NFR-02 HTTPS | NFR-04 secure transport and secrets |
| NFR-03 private authorization | NFR-03 authorization |
| NFR-04 understandable/accessibility | NFR-01 |
| NFR-05 invalid/revoked identifiers | NFR-05 safe errors; FR-09 |
| NFR-06 minimization | NFR-02; privacy/safety rules in the canonical specification |
| NFR-07 unavailable-information errors | NFR-09 reliability and graceful failure |

Mappings are semantic, not a claim of implementation or a one-to-one renumbering. Link actual issue IDs, reviewed PRs and executed results using [traceability.md](traceability.md). Do not infer current YouTrack state from old branch names.
