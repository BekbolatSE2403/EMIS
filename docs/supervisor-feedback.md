# Supervisor review record

Initial planning feedback has been received. The team supplied the text below on 2 November 2026 and attributed it to project supervisor Yespenbetova Dana Altynbekqyzy. The original feedback/review date was not supplied; the receipt date must not be substituted for it. This record preserves the supplied wording with normalized Markdown formatting.

The recommendation is to proceed to requirements analysis and prototyping. It is not approval of the revised architecture, security implementation or a completed system. Follow-up review of this revision remains pending. A dated source record can be added when available without inventing a date, signature or endorsement.

The commission identified contradictory review status and duplication in the earlier report. Current documents consistently distinguish received initial feedback from pending follow-up review. [Feedback response matrix](feedback-response-matrix.md) links each comment to actual document revisions and unfinished work.

---

# Supervisor Feedback — Initial Project Planning

**Project:** Design and Development of a Privacy-Aware QR/NFC-Based Emergency Medical Information System

## 1. Strengths

The project addresses a meaningful real-world problem by aiming to make essential emergency medical information accessible when it may be difficult for a person to communicate. The proposed combination of QR codes, NFC-enabled identification cards, and user-managed medical profiles offers a practical direction for further investigation.

The team has identified the main system components, assigned initial responsibilities, and proposed a suitable starting technology stack.

## 2. Areas for Improvement

### 1. Requirements and target users

Clearly identify the primary users and stakeholders, including patients, emergency responders, and trusted emergency contacts. Define the main use cases and explain how the system will operate during an actual emergency.

### 2. Privacy and access control

Privacy is a central part of the project, not just an additional feature. Specify which medical information is visible to each type of user, how consent is obtained, how access is authorized, and how access can be revoked. Explain how the system will protect sensitive information against unauthorized access.

### 3. QR/NFC access mechanism

Describe the technical workflow for both QR codes and NFC-enabled cards. Clarify what the QR code or NFC tag contains, whether it references a protected online profile, how access is granted, and what happens if the identification card is lost or copied.

### 4. Security and data protection

Define the authentication and authorization mechanisms, encryption requirements, secure session handling, and audit logging strategy. Consider risks such as stolen identifiers, copied QR codes, unauthorized profile access, and exposure of sensitive medical information. Avoid storing readable medical details directly in publicly scannable QR codes or NFC tags.

### 5. Emergency usability and reliability

Design the interface for fast access under stressful conditions. Prioritize essential information, readable typography, clear navigation, and mobile responsiveness. Consider what happens when internet access is unavailable, the QR code is damaged, or the user cannot authenticate.

### 6. First-aid information resources

Define the scope and sources of the first-aid content. Ensure that information is reviewed against reputable medical guidance, clearly presented, and distinguished from personalized medical advice.

### 7. Testing and evaluation

Prepare a verification plan covering functional requirements, access-control rules, security testing, QR/NFC scanning, usability, and performance. Define measurable criteria for successful emergency-information retrieval.

## 3. Recommended Deliverables for the Next Checkpoint

1. A formal requirements specification with functional and non-functional requirements.
2. Use-case diagrams, system architecture, database design, and user-flow diagrams.
3. A threat model and privacy-by-design strategy.
4. A Figma prototype demonstrating the patient profile and emergency-access workflow.
5. A technical proof of concept demonstrating QR/NFC identification and controlled access to a sample medical profile.
6. A test plan with measurable acceptance criteria.

## Overall Assessment

The project has a relevant application and a promising initial scope. However, the most important design challenge is balancing rapid access to essential emergency information with the protection of highly sensitive medical data.

The team should establish the privacy model, threat model, and emergency-access workflow before committing to the final architecture. Particular attention should be paid to the distinction between identifying a patient and authorizing access to that patient's medical information.

**Recommendation:** Proceed to requirements analysis and prototyping. Prioritize security, privacy, and emergency usability from the beginning rather than treating them as final-stage implementation tasks.
