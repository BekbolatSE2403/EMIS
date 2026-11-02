# Frontend prototype correction and verification

Reviewed 2 November 2026. This change corrects the static demonstration; it does not implement backend privacy, authentication, QR generation or NFC access.

## Behavior

- src/lib/demo-profile.ts defines one explicitly fictional profile: Alex Morgan, B+, asthma, peanut/penicillin allergies, Jamie Morgan as a demo contact, no callable contact number and no supplied medication information.
- Contact display and dial target derive from one normalized international number when configured. Missing or malformed numbers show a disabled unavailable state. The default demonstration no longer embeds unverified phone numbers.
- Missing allergies, conditions, blood type, medications, contact details or update date produce explicit unavailable text. Missing medication information does not imply no medication use.
- Critical allergies precede the medical overview. Existing self-reported and clinical-safety notices are retained.
- The fixture update date is explicitly labeled as a demo record date, not a verified medical update. QR/NFC remains marked planned.
- EMIS metadata replaces the starter title/description; the demo requests noindex/nofollow. Robots metadata is not authorization.

## Executed checks

| Check | Result |
|---|---|
| npm run lint | Passed |
| npm run build, including TypeScript | Passed on locked Next.js 16.4.2; dependencies/lockfile unchanged |
| Production server at 127.0.0.1:3100 | Page loads with EMIS title, fictional values, notices and missing-information states |
| Component rendering with default fixture | Contact disabled; medication unavailable; demo date visible; emergency-services tel:112 link retained |
| Component rendering with configured synthetic phone | Displayed normalized number equals tel target; no call initiated |
| Component rendering with empty fields and malformed phone/date | Clear unavailable text; no invalid contact link or Invalid Date text |
| Browser widths 375, 768 and 1280 CSS px | document scroll width equals viewport width at each size; no horizontal overflow |
| Mobile visual review | Allergy warning readable near top; medication/contact unavailable states and update disclaimer readable |
| Keyboard Tab from page | Disabled contact skipped; emergency-services link receives visible solid 2 px focus outline |

Checks used a local production build, browser viewport overrides and temporary component-rendering checks. No phone link was activated. This is not a full WCAG audit, physical-phone test, clinical evaluation, security test or measured performance study. Figma frames and historical report screenshots still require separate synchronization/review.
