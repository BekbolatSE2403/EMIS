# Threat model

Target prototype, 2 November 2026. Assessment precedes implementation. No row below claims a control has passed. Assets are private health entries, contact details, account credentials/sessions, public link values, publication choices and service availability. Trust boundaries TB-1–TB-5 are defined in [architecture.md](architecture.md).

| ID | Threat and boundary | Required mitigation | Residual risk | Verification |
|---|---|---|---|---|
| TM-01 | Copied/lost QR or NFC URL, TB-1 | Minimal opt-in summary, random identifiers, owner revoke/rotate | Anyone with an active copy can view approved fields; previously copied data cannot be recalled | T-05, T-06, T-12 |
| TM-02 | Identifier enumeration, TB-2 | 256-bit random values, digest storage, neutral errors, request throttling | Rate limits can affect shared networks; not anonymity against a known URL | T-06, T-12 |
| TM-03 | Owner A accesses owner B, TB-3 | Session-derived owner, object-scoped queries, deny by default | Misconfigured new endpoints could introduce leaks | T-03 |
| TM-04 | Overbroad public serializer, TB-3 | Dedicated allowlisted response and private defaults; inspect HTML/client payloads too | A deliberately shared field is public even if medically sensitive | T-04 |
| TM-05 | Session theft, fixation or CSRF, TB-2/3 | HTTPS, protected cookie, rotation, CSRF token, server expiry/revocation | XSS/application compromise can still act in-session | T-09 |
| TM-06 | Injection/XSS and malformed fields, TB-3/4 | Typed validation, parameterized persistence, output escaping, no raw HTML/file upload | Medical statements can still be inaccurate | T-07 |
| TM-07 | Raw URL/health values in logs, analytics or caches, TB-2/4 | Suppress sensitive paths, no external analytics, no-store and tested fresh-read behavior | Browser history, screenshots and card sharing remain possible | T-04, T-06, T-10 |
| TM-08 | Database/backup compromise or operator misuse, TB-4 | Private DB, least privilege, encrypted volumes/backups, restricted audit and key separation | Runtime and privileged operators may still see plaintext; no end-to-end encryption claim | T-10, T-11 |
| TM-09 | Incorrect/outdated self-reported facts, TB-1/3 | Unverified notices, last-updated indicator, explicit missing data | No clinical verification, no transfusion/diagnostic reliance | T-02 |
| TM-10 | Network/service/card failure or denial of service, TB-1/2 | Clear unavailable state, QR alternative to NFC, printed emergency guidance, monitored limits | URL-based cards do not provide offline medical records | T-05, T-08, T-12 |
| TM-11 | Forged recovery or email disclosure, TB-5 | Independent hashed single-use tokens, bounded expiry, neutral responses, no health details in email | Email compromise/provider failures remain risks | T-13 |
| TM-12 | Data reappears after deletion/restore, TB-4 | Immediate disablement, primary purge, 30-day backup/audit expiry, replay deletion jobs before restore is exposed | Old copies outside EMIS cannot be erased | T-11 |

Baseline assumption: synthetic profiles only, ordinary internet attackers, potentially malicious card readers and malicious authenticated owners. No verified clinical identity, hospital integration, special emergency authority or trusted scanner is assumed. Review threats after any scope/API change, record reviewer/date and update the linked tests. Legal compliance, production incident response and clinical effectiveness are outside this prototype assessment.
