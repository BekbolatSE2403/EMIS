# EMIS frontend

This Next.js, React and TypeScript application implements a static emergency-profile prototype. It uses demonstration data and has no backend connection, authentication, persistence, visibility enforcement, QR generation or NFC provisioning.

## Local setup

Use a Node.js version compatible with the locked Next.js version and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production-style verification:

```sh
npm run lint
npm run build
npm run start
```

Builds currently download Geist fonts through next/font/google and require access to that service. Follow [AGENTS.md](AGENTS.md) and the installed Next.js documentation before changing framework conventions.

## Review boundaries

The current interface is a demonstration, not evidence of a working medical information service. All examples must be fictional. Do not add real patient details or unverified callable demo phone numbers. Check responsive layouts, keyboard access, empty states and the displayed/dialed number relationship separately from lint/build checks.

The [canonical requirements](../docs/EMIS_Requirements_Specification.md) define target behavior. Report screenshots and Figma concepts are historical evidence until explicitly refreshed and reviewed.
