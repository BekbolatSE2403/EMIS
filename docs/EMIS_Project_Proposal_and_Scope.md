# EMIS — Project Proposal and Scope

**Project title:** Design and Development of a Privacy-Aware QR/NFC-Based Emergency Medical Information System  
**Project acronym:** EMIS  
**Project type:** Software Engineering diploma project  
**Institution:** Astana IT University  
**Prepared for:** First pre-defense, 24 October 2026  
**Status:** Initial proposal; subject to supervisor review

## 1. Project Overview

The Emergency Medical Information System (EMIS) is a proposed web-based solution that enables a person to maintain essential emergency medical information and make an intentionally limited subset accessible through a QR code or NFC-enabled identification card. The concept is intended to help an emergency responder or bystander quickly locate user-provided information such as known allergies, relevant medical conditions, and emergency contacts when the card owner may be unable to communicate.

EMIS is **not** intended to diagnose illness, replace clinical records, verify medical facts, or substitute for professional emergency services. The initial interface is a prototype using demonstration data. QR/NFC access, backend persistence, identity verification, and production-grade access controls are planned work, not completed functionality.

## 2. Problem Statement

In an emergency, a person may be unable to explain important medical details. Information such as severe allergies or an emergency contact may be stored in different places, inaccessible to a nearby helper, or unavailable without unlocking the person's device. At the same time, exposing an entire medical history through a publicly scannable card would create privacy risks.

The engineering problem is to design a usable, reliable, and privacy-aware mechanism for sharing **only selected emergency information** through a QR/NFC entry point, while keeping sensitive profile management under the owner's control. Section 2 of the consolidated report now presents a 31-submission survey summary. Consent, eligibility, collection dates and analysis denominators require verification before those results support validated requirements.

## 3. Target Users and Stakeholders

- **Card owners:** people who choose to store and selectively share their emergency information.
- **Emergency helpers:** bystanders or first responders who may scan a card to view a limited emergency profile. The design does not assume that all responders will rely on the system.
- **Emergency contacts:** individuals whom the card owner lists for contact in an emergency.
- **Project stakeholders:** the student development team, academic supervisor, and potential user representatives involved in requirements validation.

## 4. Aim and Objectives

**Aim:** Design and develop a prototype of a privacy-aware QR/NFC-based emergency medical information system that supports rapid access to a minimal emergency profile while providing a controlled process for managing the underlying information.

**Objectives:**

1. Investigate user needs and identify the most useful and appropriate fields for an emergency profile.
2. Review relevant academic work and compare existing medical ID and emergency-information solutions.
3. Define functional and non-functional requirements with testable acceptance criteria.
4. Compare and justify major technology choices for the frontend, backend, data storage, and component communication.
5. Design system context, use case, and component diagrams, and document the data flow and trust boundaries.
6. Develop accessible mobile and desktop interface prototypes for viewing an emergency profile.
7. Implement, in later stages, secure profile management, a limited public emergency view, and QR/NFC-based profile access.
8. Evaluate usability, correctness, access restrictions, and QR/NFC workflow behavior using defined test scenarios and metrics.

## 5. Proposed Solution and User Journey

1. The owner creates or updates a profile after authentication (planned).
2. The owner selects which emergency fields may appear in a limited public view (planned).
3. A QR code and/or NFC tag points to an emergency-profile URL or token, rather than storing the full medical record on the physical card (proposed design decision).
4. A helper scans the card and opens the limited emergency view without requiring access to the owner's private account (planned).
5. The view clearly labels the information as user-provided and potentially unverified, and displays emergency contact options and appropriate emergency-service guidance (planned).

A card must not be treated as proof of identity or as an authoritative medical record. A lost or copied card and a forwarded link are relevant threat scenarios that must be addressed during detailed design.

## 6. Project Scope

### 6.1 In Scope (Target Prototype)

- Responsive web interface for an emergency medical profile.
- Owner-facing profile creation and editing after authentication.
- Separation of private profile data from a minimal emergency view.
- Proposed QR-code and NFC-card linking to the emergency view.
- Storage and retrieval of selected profile fields through a backend API.
- Emergency contact display and links to general first-aid guidance, with appropriate medical disclaimers.
- Access-control, validation, logging, and security testing appropriate to a student prototype.
- Documentation, architecture diagrams, usability tests, and a demonstrable prototype.

### 6.2 Out of Scope (Initial Prototype)

- Medical diagnosis, treatment recommendations, or clinical decision support.
- Verification of diagnoses, allergies, prescriptions, or patient identity against hospitals.
- Integration with national health systems, hospital EHRs, or ambulance dispatch systems.
- Guaranteed availability during emergencies, including offline access without a network connection.
- Production deployment involving real patient records without additional legal, security, and ethics review.
- Automatic emergency calling, location tracking, or dispatch.

## 7. Preliminary Requirements

| ID | Requirement | Priority | Preliminary acceptance criterion |
|---|---|---|---|
| FR-01 | Display a limited emergency profile | Must | A test visitor can open the demo profile and view designated emergency fields. |
| FR-02 | Support profile management by its owner | Must (planned) | An authenticated test owner can create and update sample data. |
| FR-03 | Separate public and private data | Must (planned) | Fields marked private are absent from the public response and interface. |
| FR-04 | Open an emergency view through a QR/NFC link | Must (planned) | A test scan opens the intended profile route. |
| FR-05 | Display emergency contact information | Must | The interface presents a clearly labeled emergency contact action when configured. |
| NFR-01 | Mobile usability | Must | Core profile content is usable at common mobile viewport sizes. |
| NFR-02 | Privacy and security | Must (planned) | Unauthorized test requests cannot access owner-only endpoints or private fields. |
| NFR-03 | Transparency | Must | The interface identifies the information as user-provided and potentially unverified. |

These are preliminary requirements. The detailed requirements specification and final acceptance criteria will be maintained separately.

## 8. Proposed Technology Stack

| Layer | Proposed technology | Purpose / current status |
|---|---|---|
| Frontend | Next.js, TypeScript, Tailwind CSS | Frontend project and emergency-profile UI have been developed. |
| Backend | Java, Spring Boot, Maven | Proposed; architecture documentation prepared, implementation pending. |
| Database | PostgreSQL | Candidate relational database; final selection requires comparison. |
| API | REST over HTTPS with JSON | Proposed interface between frontend and backend. |
| Design | Figma | Mobile, desktop, scanning-journey, and card mockups prepared. |
| Workflow | GitHub, YouTrack | Repository, tasks, branches, and pull requests used for tracking. |

Technology choices are provisional until documented alternatives are evaluated.

## 9. Expected Outcomes and Deliverables

- Reviewed project proposal, evidence of relevance, literature review, and comparative studies.
- Functional and non-functional requirements with acceptance criteria.
- Editable and exported system context, use case, and component diagrams.
- Figma mockups and a responsive frontend demonstration.
- Backend architecture documentation, planned data model, and API contract.
- Later-stage integrated prototype supporting QR/NFC-linked emergency access.
- Verification plan, test cases, evaluation results, and documented limitations.
- Traceable GitHub contributions, YouTrack tasks, and supervisor feedback.

## 10. Team and Responsibilities

| Member | Primary responsibility | First-stage contribution |
|---|---|---|
| Bekbolat Yergaliuly | Frontend development | Next.js initialization and emergency medical profile UI. |
| Olzhas Omerzak Zhunisbekuly | Backend development | Backend architecture and development-plan documentation; backend implementation scheduled for later. |
| Shugyla Akhit Zhasulankyzy | UI/UX design | Figma designs and UI/UX documentation. |

**Academic supervisor:** Yespenbetova Dana Altynbekqyzy.

## 11. Current Status at First Pre-Defense

The repository contains a frontend prototype, UI/UX design materials, and backend planning documentation. YouTrack currently shows five completed tasks and two pending implementation tasks: Spring Boot initialization (EMIS-3) and Emergency Medical Profile API development (EMIS-7). The existence of a merged documentation pull request does not mean the backend is implemented. QR/NFC integration, secure profile management, and production readiness remain future work.

## 12. Risks, Assumptions, and Mitigation

| Risk / assumption | Potential impact | Proposed mitigation |
|---|---|---|
| Medical information may be inaccurate or outdated | Helpers may rely on incorrect details | Clearly mark data as self-reported; provide update dates and disclaimers. |
| Public scanning can expose sensitive information | Privacy violation | Data minimization, explicit owner selection, revocable links/tokens, and access reviews. |
| Lost or duplicated QR/NFC cards | Unintended profile access | Support link revocation/reissue and avoid embedding sensitive data on the card. |
| Poor connectivity or service outage | Emergency view unavailable | Document limitations and test availability; do not promise offline access. |
| Backend integration takes longer than planned | Reduced demonstrable functionality | Prioritize documented interfaces and incremental integration. |
| Requirements have not yet been validated with users | Incorrect scope or design | Conduct and record genuine user discussions and revise requirements. |

## 13. Planned Evaluation

The later-stage prototype will be evaluated using test scenarios for profile access, field visibility, unauthorized access attempts, and QR/NFC navigation. Usability tasks will assess whether a participant can find a critical allergy warning and emergency contact promptly. Proposed metrics include task completion rate, time to locate designated fields, successful/failed access-control checks, and QR/NFC link-opening success rate. Baselines, sample sizes, conditions, and acceptance thresholds must be established before testing; no evaluation results are claimed at this stage.

## 14. References and Project Links

- **GitHub:** https://github.com/BekbolatSE2403/EMIS
- **YouTrack:** https://emergency-medical-system.youtrack.cloud/projects/EMIS/agiles/204-1/current
- **Figma:** https://www.figma.com/design/SDg61cKTrjUKzSXLRnfvmr/Untitled?node-id=2-1837&t=DK0AGKwpniboWWAa-1


---
