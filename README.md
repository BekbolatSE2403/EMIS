# Emergency Medical Information System

Design and Development of a Privacy-Aware QR/NFC-Based Emergency Medical Information System (EMIS).

EMIS is a university diploma project exploring access to a deliberately limited, owner-approved emergency summary through a QR/NFC URL. Medical details are self-reported and cannot replace professional assessment.

## Current implementation

Reviewed 2 November 2026. A Next.js emergency-profile prototype and design/planning documents exist. The page uses fixed demonstration data. A QR/NFC badge is not evidence of scanning functionality.

| Component | Status |
|---|---|
| Next.js emergency profile | Static UI implemented; check results separately |
| Figma concepts | Prepared; consistency and source review pending |
| Spring Boot API and PostgreSQL | Planned; no runnable backend in this repository |
| Owner authentication, editing and visibility controls | Planned |
| QR generation, NFC provisioning and link revocation | Planned |
| Integrated security, device and usability evaluation | Not yet conducted |

## Technology choices

- Frontend: Next.js, React, TypeScript and Tailwind CSS, implemented prototype.
- Backend: Java, Spring Boot and Maven, proposed selection.
- Database: PostgreSQL, proposed selection.
- Design: Figma. Version control: GitHub. Tracking: YouTrack.

## Run the frontend

```sh
cd frontend
npm ci
npm run dev
```

Open http://localhost:3000. For local checks, run `npm run lint` and `npm run build`. See [frontend notes](frontend/README.md) for limitations. No backend or database setup is required for the static demo. Check results must include the tested revision and environment; a successful build does not verify the planned system.

## Documentation

Start with the [documentation index](docs/README.md). Initial planning feedback is received; follow-up review of the revised design is pending. See the [supervisor feedback record](docs/supervisor-feedback.md) and [comment-to-revision matrix](docs/feedback-response-matrix.md).

- [Architecture and user flows](docs/architecture.md)
- [Architecture decisions](docs/decisions.md)
- [Privacy and security](docs/privacy-and-security.md)
- [Threat model](docs/threat-model.md)
- [Database model](docs/data-model.md)
- [API contract](docs/api-contract.md)
- [Verification plan](docs/verification.md)

- [Canonical requirements](docs/EMIS_Requirements_Specification.md)
- [Legacy requirement ID migration](docs/requirements.md)
- [Project proposal and scope](docs/EMIS_Project_Proposal_and_Scope.md)
- [Technology comparison](docs/EMIS_Technology_Comparison.md)
- [Consolidated report](docs/EMIS_main_report.docx)
- [Backend plan](backend/Olzhas_Backend_README.md)
- [Design handoff and unresolved checks](designs/EMIS_UI_UX_Design_Guidelines.md)
- [Survey verification status](docs/research/survey-methodology.md)
- [Implementation status and review assignments](docs/traceability.md)

The report incorporates the team's 31-submission survey summary. Consent, eligibility, collection dates and final analysis denominators remain pending verification. Historical mockup screenshots and tracker statuses are not current test evidence. Keep response-level personal data and secrets outside this public repository.

## Team

| Contributor | Responsibility |
|---|---|
| Bekbolat Yergaliuly | Frontend development and coordination |
| Olzhas Omerzak Zhunisbekuly | Backend architecture and development |
| Shugyla Akhit Zhasulankyzy | UI/UX design and QA |

Supervisor: Yespenbetova Dana Altynbekqyzy.

## Project links

- [GitHub repository](https://github.com/BekbolatSE2403/EMIS)
- [YouTrack board](https://emergency-medical-system.youtrack.cloud/projects/EMIS/agiles/204-1/current)
- [Figma source](https://www.figma.com/design/SDg61cKTrjUKzSXLRnfvmr/Untitled?node-id=2-1837)

Figma and YouTrack links were recovered from supplied documents; current access and issue state require verification.

## Next steps

Review the documented requirements, public-field rules, privacy/threat model, schema and security/API baseline with the team and supervisor before implementation. Then initialize the backend/database, implement owner workflows and public filtering, integrate QR/revocation, and collect actual test evidence. NFC is a Should requirement and first-aid resources are Could scope in the canonical specification.
