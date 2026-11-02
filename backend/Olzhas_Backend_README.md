# EMIS Backend

**Project:** Design and Development of a Privacy-Aware QR/NFC-Based Emergency Medical Information System  
**Backend contributor:** Olzhas Omerzak Zhunisbekuly  
**Status:** Architecture and development planning (first pre-defense)

## Overview

The EMIS backend is planned to support secure management and controlled retrieval of emergency medical profiles. In the proposed workflow, scanning a QR code or tapping an NFC card opens a limited emergency profile. The card is intended to reference a profile rather than store a full medical record.

This directory currently documents the **proposed backend**, not a completed or deployed service.

## Proposed Technology Stack

| Area | Proposed technology | Purpose |
|---|---|---|
| Language | Java | Backend application development |
| Framework | Spring Boot | REST API and application logic |
| Build tool | Maven | Dependency and build management |
| Database | PostgreSQL (proposed) | Store profile and access-related data |
| API format | REST / JSON | Communication with the Next.js frontend |
| Version control | Git / GitHub | Traceable contributions and review |

Technology choices and alternatives will be evaluated in the project technology comparison before final approval.

## Planned Architecture

```text
QR code / NFC card
        |
        v
Public emergency profile (Next.js)
        |
        | HTTPS / JSON (planned)
        v
Spring Boot REST API
        |
        +--> Public-profile access rules
        +--> Owner authentication and profile management
        +--> Validation and application logic
        |
        v
Database (proposed: PostgreSQL)
```

The public view is intended to expose only emergency information approved by the profile owner. Authentication, authorization, consent management, and audit mechanisms are **design requirements**, not implemented features at this stage.

## Planned API Operations

The following are preliminary design examples; endpoint paths and payloads may change after requirements review.

| Method | Proposed endpoint | Intended purpose | Access |
|---|---|---|---|
| GET | `/api/public/profiles/{publicId}` | Retrieve an approved emergency profile | Limited public access |
| GET | `/api/me/profile` | Retrieve the owner's complete editable profile | Authenticated owner |
| PUT | `/api/me/profile` | Update the owner's profile | Authenticated owner |
| PATCH | `/api/me/profile/visibility` | Select fields approved for emergency display | Authenticated owner |

Do not include medical records, credentials, or sensitive personal data in QR/NFC payloads. Use fictional data for development and demonstrations.

## Privacy and Safety Considerations

- Minimize information exposed without authentication.
- Separate public emergency fields from private owner-managed data.
- Require authorization for profile changes and private information.
- Plan secure transport, input validation, consent and deletion workflows.
- Label patient-entered information as **self-reported / not clinically verified**.
- Never treat a displayed blood type as sufficient for clinical transfusion decisions.
- Keep secrets and real patient information out of the repository.

## First Pre-Defense Deliverables

For the first pre-defense, the backend contribution focuses on analysis and planning:

1. Proposed backend architecture and component responsibilities.
2. Initial API design and data model assumptions.
3. Security and privacy requirements.
4. Technology alternatives and implementation roadmap.
5. Traceable YouTrack issue and reviewed GitHub Pull Request.

**Not yet claimed as completed:** runnable Spring Boot service, persistent database, working QR/NFC integration, authentication, or tested REST endpoints.

## Development Roadmap

1. Confirm requirements, public/private data fields, and technology decisions.
2. Initialize a Spring Boot application with Maven and environment-based configuration.
3. Design the database schema and implement domain models.
4. Implement and test emergency-profile endpoints using synthetic data.
5. Add owner authentication, authorization, and privacy controls.
6. Integrate with the Next.js frontend; test access rules and failure cases.

## Collaboration and Tracking

- **Repository:** https://github.com/BekbolatSE2403/EMIS
- **Project management:** [EMIS YouTrack board](https://emergency-medical-system.youtrack.cloud/projects/EMIS/agiles/204-1/current) (live state not verified)
- **Contributor:** Olzhas Omerzak Zhunisbekuly
- **Supervisor:** Yespenbetova Dana Altynbekqyzy

Create a YouTrack issue for this documentation task, then use its actual ID in the branch, commit, and Pull Request. Have another team member review the PR before merging to `main`.

> **Note:** This README describes the intended backend architecture for a university prototype. It is a planning artifact and must not be presented as proof of implemented functionality.
