# Threat Model

## Project Overview

A Node.js/Express 5 API server backend with a React frontend (Wentex), a design mockup sandbox, and a shared PostgreSQL database via Drizzle ORM. The project is in early scaffolding stage — currently the only live endpoint is a health check at `/api/healthz`. The application is not yet deployed.

Tech stack: pnpm workspaces, Node.js 24, TypeScript 5.9, Express 5, PostgreSQL + Drizzle ORM, Zod validation, Vite frontend.

## Assets

- **Application secrets** — `DATABASE_URL` (Postgres connection string) and any future API keys. Leakage gives full database access.
- **User data** — Not yet collected; will become a major asset as product features are added.
- **API integrity** — As routes and business logic are added, the API becomes the primary trust boundary.

## Trust Boundaries

- **Browser to API** — All client requests cross this boundary. Currently only unauthenticated public endpoints exist (`/api/healthz`). Future authenticated endpoints must enforce session/token validation server-side.
- **API to PostgreSQL** — The API server has direct database access via a connection pool. SQL injection at the API layer would give full database access. Drizzle ORM with parameterized queries provides protection when used correctly.
- **Public / Authenticated surface** — Currently all routes are public. This boundary must be enforced server-side when user-facing features are added.
- **External / Internal** — The mockup sandbox (`artifacts/mockup-sandbox`) is development-only and must not be reachable in production.

## Scan Anchors

- **Production entry points**: `artifacts/api-server/src/app.ts` (Express setup), `artifacts/api-server/src/routes/` (route handlers)
- **Highest-risk areas**: CORS config in `app.ts`, database connection in `lib/db/src/index.ts`, any future auth/session middleware
- **Public surface**: `/api/healthz` — unauthenticated, returns `{"status":"ok"}`
- **Dev-only**: `artifacts/mockup-sandbox/` — Vite dev server, must not be reachable in production
- **Not yet built**: authentication, authorization, user data endpoints — these are the highest-risk surfaces to scan when added

## Threat Categories

### Spoofing

No authentication is currently implemented. When user authentication is added, all API endpoints that access user data MUST require a valid session token. Session tokens must be unpredictable and expire within a reasonable window.

### Tampering

Input validation via Zod is set up but not yet applied to user-submitted routes. When endpoints that accept user data are added, all inputs MUST be validated server-side with Zod schemas. Business logic (prices, quantities, permissions) must be enforced server-side.

### Information Disclosure

The logger (`pino`) correctly redacts `Authorization` headers, cookies, and `Set-Cookie` response headers. Stack traces and verbose error messages must not be exposed in production responses. `NODE_ENV=production` disables pino-pretty transport, which is correct.

### Denial of Service

No rate limiting is currently configured on any endpoint. As user-facing routes are added, rate limiting (e.g. via `express-rate-limit`) MUST be applied to authentication and public API endpoints to prevent abuse and resource exhaustion.

### Elevation of Privilege

All database queries MUST use Drizzle ORM's parameterized query interface — never raw string concatenation. When admin or role-gated routes are added, authorization checks must be enforced server-side, not just on the frontend.

### Security Misconfiguration

`cors()` is invoked with no options, enabling wildcard `Access-Control-Allow-Origin: *`. This must be scoped to known trusted origins before authenticated routes or cookie-based sessions are introduced.
