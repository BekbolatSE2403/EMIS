# EMIS documentation index

Baseline dated 2 November 2026. The current goal is a coherent report, requirements and target architecture before backend implementation. Initial supervisor planning feedback is received; follow-up review of this baseline is pending. No unimplemented control is marked operational.

## Reading order and source precedence

1. [Supervisor feedback record](supervisor-feedback.md) and [response matrix](feedback-response-matrix.md).
2. [Canonical requirements](EMIS_Requirements_Specification.md); [legacy ID migration](requirements.md).
3. [Architecture and user flows](architecture.md) and [selected decisions](decisions.md).
4. [Privacy and security](privacy-and-security.md), [threat model](threat-model.md), [data model](data-model.md).
5. [API semantics](api-contract.md) and [OpenAPI contract](openapi.yaml).
6. [Verification plan](verification.md), [evidence/assignments](traceability.md), [survey limitations](research/survey-methodology.md).
7. [Consolidated report](EMIS_main_report.docx) and [revision notes](report-revision-notes.md).

Markdown is the editable engineering baseline; the main report and specialist Word companions mirror it. A discrepancy is a documentation defect to fix in the same PR, not permission to silently choose whichever wording is convenient. The original Desktop report supplied by the team is the report reference; source survey charts and historical Figma images are preserved. Neither a report nor an architecture drawing proves implementation.

## Word companions

- [Architecture and diagrams](EMIS_Architecture_and_Diagrams.docx)
- [Verification and evaluation](EMIS_Verification_and_Evaluation_Plan.docx)
- [Project management and risks](EMIS_Project_Management_and_Risks.docx)
- [Design documentation](../designs/Shugi_figma_report%20.docx)

The architecture/verification companions are regenerated from the target baseline; management/design companions are corrected for evidence status and links. The historical design screenshots remain unchanged until their source is synchronized. Diagram sources and native SVG figures are under diagrams/.

## Scope and status

Main contains the original static Next.js UI. [PR #21](https://github.com/BekbolatSE2403/EMIS/pull/21) contains verified static UI corrections; it is not merged at this baseline. [PR #20](https://github.com/BekbolatSE2403/EMIS/pull/20) contains documentation and target design changes. Backend, database, authorization, QR/NFC hardware and integrated evaluation remain planned. No YouTrack task status or teammate acceptance was changed by these documents.
