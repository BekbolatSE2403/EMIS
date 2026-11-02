# EMIS — UI/UX Design Documentation

**Status:** Draft for review | **Task:** EMIS-6 — Create UI/UX Design Documentation  
**Project:** Design and Development of a Privacy-Aware QR/NFC-Based Emergency Medical Information System  
**Design contributor/reviewer:** Shugyla Akhit (review pending)  
**Date:** 23 October 2026  
**Repository:** https://github.com/BekbolatSE2403/EMIS  
**Figma project:** https://www.figma.com/design/SDg61cKTrjUKzSXLRnfvmr/Untitled?node-id=2-1837

> **Evidence note:** This document is based on the four Figma concept screenshots provided by the team. Suggested colors and acceptance criteria are provisional until verified in the source Figma file. AI-assisted initial generation should be disclosed accurately; human review and modifications should be attributed to the person who performed them.


Recovered for review on 2 November 2026 from the earlier design-documentation branch. The observations and screenshots below are historical. Figma access, current frame values, exports and contributor approval have not been reverified. The frontend correction uses a separate explicit demo fixture; do not claim visual parity until the source designs are synchronized.

## 1. Purpose and scope

This document defines the current UI/UX design concept for EMIS (Emergency Medical Information System), a university diploma prototype for accessing limited emergency-relevant information through a QR/NFC medical ID concept. It describes the four provided mockups and gives implementation guidance. It is a design specification, not evidence of completed backend, functional QR/NFC, medical validation, or deployed functionality.

## 2. Design deliverables

Four concept screens are available: (1) mobile public emergency profile; (2) desktop public emergency profile; (3) four-step QR/NFC scanning journey; and (4) physical NFC medical ID card concept. The source Figma URL is linked above; clean exported frame assets remain pending verification. Historical screenshots are embedded in the design/report Word files; the clean image filenames listed below are pending assets, not existing exports.

## 3. Target users and scenario

Primary user: a bystander or responder who discovers a medical ID card and needs to quickly identify reported critical allergies, conditions, and an emergency contact. Secondary user: the card owner, who may eventually manage what is public. Intended journey: discover card → scan QR or tap NFC → open limited public profile → review warnings → call local emergency services when appropriate. The journey is conceptual and is not yet a tested end-to-end interaction.

## 4. Information architecture

The public emergency profile displays: EMIS identity and prototype status; public-view/privacy notice; profile title and patient name; DEMO and self-reported labels; prominent critical allergies; blood type and condition cards; emergency call action (112 for Kazakhstan); emergency contact panel; limited-public-profile explanation; and disclaimer/footer. No private medical records are shown in the proposed public view.

## 5. Visual design system

Observed visual direction: navy text and header/card accents, teal EMIS branding and primary emergency call button, light neutral page backgrounds, red allergy alerts, rounded cards, clear iconography, and generous spacing. Suggested implementation tokens (provisional, not verified Figma styles): navy #10243B, teal #0D9488, danger red #DC2626, off-white #F5F7F9, white #FFFFFF. Confirm actual color values, font family, type scale, radii, and spacing directly in Figma before marking this section final. Use consistent semantic color meanings across mobile and desktop.

## 6. Component rules

Header: EMIS mark and prototype indicator. Privacy banner: make limited public visibility obvious. Patient identity: large name with DEMO/self-reported indicators. Critical allergy alert: visually highest-priority content; never rely on red alone, use icon and explicit text. Blood type/condition: compact, scannable cards with source qualification. Emergency action: large high-contrast Call 112 button; do not suggest it is a substitute for professional medical care. Emergency contact: show unavailable/disabled state clearly if no number exists. Footer: state that data are fictional and not clinically verified.

## 7. Responsive behavior

Mobile: single-column reading order, allergy alert near top, two compact information cards where space permits, full-width emergency call control, comfortable touch targets. Desktop: broader grid with main medical information and an emergency-help/contact side column. Preserve the same safety messages and data between breakpoints. The mockups show mobile and desktop layouts; precise breakpoint rules remain to be defined and tested.

## 8. Privacy, trust and medical safety

Public access must be limited to information explicitly approved for emergency display. The mockups use fictional data and identify patient-provided information as self-reported/not clinically verified. Blood type must not be treated as a clinically confirmed basis for transfusion. Do not display private records, full medical history, authentication tokens, or personal contact details without appropriate permissions. Production access control, consent, logging, data minimization and deletion workflows remain planned requirements rather than implemented features. Call 112 is Kazakhstan-specific; internationalization should be considered later.

## 9. Accessibility and usability checklist

Check readable contrast for teal, muted labels, and red warnings; keyboard access and visible focus states for interactive web elements; descriptive button labels; semantic headings; icons paired with text; mobile touch targets; readable text at 200% zoom; screen-reader announcements for critical allergy warnings; and responsive layout without horizontal scrolling. These are acceptance checks to perform, not completed test results.

## 10. Consistency issues found in current mockups

The mobile screenshot displays blood type B+, while the desktop screenshot displays O+. The mobile emergency contact is Batman, while the desktop mockup uses Sarah Johnson. Choose one fictional demo dataset and synchronize all screens before approval. Both mockups indicate the emergency contact is unavailable, which should remain visibly disabled until a demo number or safe behavior is intentionally added. The physical card explicitly indicates a QR placeholder and conceptual NFC: do not claim either is operational.

## 11. Design-to-development handoff

Frontend stack: Next.js, TypeScript and Tailwind CSS. The implemented frontend emergency profile exists in the repository, but visual parity with these Figma mockups should be checked separately. Backend is planned with Java and Spring Boot. The handoff should include Figma URL, four exported frames, agreed design tokens, component names, intended mobile/desktop states, and this documentation. Any backend/API integration must be tracked as separate work. Repository: https://github.com/BekbolatSE2403/EMIS . Suggested folder: designs/.

## 12. Review and acceptance criteria (EMIS-6)

To complete the YouTrack documentation task: (a) link the original Figma project; (b) export all four frames; (c) resolve mobile/desktop data inconsistencies; (d) confirm visual tokens against Figma; (e) add this file and exports to the GitHub designs/ folder through a reviewable PR; (f) have Shugyla review and meaningfully refine the documentation; (g) link the PR and Figma design in EMIS-6. Do not mark the task complete before those checks are satisfied.

## 13. Current status and next steps

Current: four UI/UX concept screens have been generated and shared as screenshots; a draft design specification is prepared. Pending verification: live Figma access, frame exports, design token values, accessibility review, data consistency fixes, and Shugyla's review. QR/NFC behavior, patient management, backend data persistence, and access-control enforcement are not demonstrated by these mockups. Next: finalize design, upload evidence to GitHub, link it in YouTrack, and capture evidence for the probation submission.

## 14. Visual references

- Mobile emergency profile: `emergency-profile-mobile.png`
- Desktop emergency profile: `emergency-profile-desktop.png`
- QR/NFC scanning journey: `qr-nfc-user-flow.png`
- NFC medical ID card concept: `nfc-medical-card.png`

**Note:** Existing screenshots include Figma canvas/editor context and should be replaced by clean frame exports before final submission.

## Current handoff requirements

Use the [privacy access matrix](../docs/privacy-and-security.md) and [verification plan](../docs/verification.md) for the target flows. Initial supervisor feedback is received; the revised Figma frames and architecture require follow-up review. The UI correction in PR #21 uses Alex Morgan, B+, asthma, peanut/penicillin allergies and Jamie Morgan as a fictional contact with no callable demo number. Historical screenshots have not been edited to imply this parity. Add owner consent/preview, lost-card revoke/rotate, unavailable network and missing-data states before calling the handoff complete.
