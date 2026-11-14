<div align="center">
  <img src="public/branding/main-logo.png" alt="MOTQN platform logo" width="140" />

  <h1>MOTQN · متقن</h1>

  <p><strong>Quran learning and academy management in one platform.</strong></p>

  <p>
    An Arabic-first learning platform connecting students, reciters, teachers,<br />
    parents, and administrators through structured learning and live teaching.
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs" alt="Next.js 16" />
    <img src="https://img.shields.io/badge/React-19-149ECA?logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5.7" />
    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  </p>

  <p>
    <a href="#overview">Overview</a> ·
    <a href="#features">Features</a> ·
    <a href="#learning-journey">Learning journey</a> ·
    <a href="#getting-started">Getting started</a> ·
    <a href="#documentation">Documentation</a>
  </p>
</div>

---

## Overview

MOTQN combines two connected learning environments:

- **Maqraa:** Quran recitation submissions, reader feedback, memorization and tajweed paths, halaqat, and correction sessions.
- **Academy:** Courses, lessons, learning paths, assignments, quizzes, live sessions, and progress tracking.

Students can participate in either environment according to their account access. Teachers and readers have dedicated workspaces, parents can follow linked children's progress, and administration is divided between platform-wide, Maqraa, and Academy responsibilities.

The interface includes Arabic and English translations, RTL/LTR support, and light and dark themes. Some documentation and legacy code still use the earlier **Itqan / Itqaan** naming.

## Features

| Area | Capabilities |
| --- | --- |
| **Quran recitation** | Audio submissions with surah and ayah metadata, recitation types, assigned readers, assessment feedback, and follow-up bookings. |
| **Memorization and tajweed** | Structured paths and stages, progress tracking, and review workflows. |
| **Academy courses** | Courses and lessons, enrollment requests, content review, public lessons, series, and archives. |
| **Assignments and quizzes** | Task creation, deadlines, submissions, grading, and quiz questions with multiple-choice and essay formats. |
| **Live learning** | LiveKit rooms for halaqat and teaching sessions, participant roles, waiting-room flows, screen sharing, and configurable video settings. |
| **Recordings** | Client-driven multipart uploads to S3-compatible storage, signed playback URLs, and a LiveKit Egress recording integration. |
| **Parent workspace** | Child linking, progress and activity reports, teacher/reader communication, and content restrictions for courses, surahs, and learning paths. |
| **Gamification** | Points, badges, streaks, leaderboards, competitions, judging, and competition stages. |
| **Certificates** | Separate Academy and Maqraa scopes, eligibility and request workflows, template fields, serial numbers, and PNG/PDF issuance. |
| **Community and resources** | Discussion forums, fiqh questions and review workflows, and a categorized book library. |
| **Communication** | Conversations, notifications, announcements, email templates, invitations, and scheduled reminders. |
| **Administration** | User and role management, application review, scoped settings, reports, activity logs, branding, homepage content, and backups. |

These capabilities are represented in the repository's routes and supporting modules. Availability depends on database migrations, account permissions, platform settings, and configured external services.

## Learning journey

```mermaid
flowchart TD
    A["Register and verify account"] --> B{"Learning environment"}
    B -->|Maqraa| C["Submit recitation or join a learning path"]
    B -->|Academy| D["Request enrollment and study lessons"]
    C --> E["Reader review and guided practice"]
    D --> F["Assignments, quizzes, and live sessions"]
    E --> G["Progress and certificate eligibility"]
    F --> G
```

Parents follow linked learners from their own workspace. Readers, teachers, and supervisors handle the relevant review and teaching stages; certificate issuance follows the configured eligibility and approval rules.

## Roles and workspaces

| Role or role group | Main workspace | Responsibility |
| --- | --- | --- |
| Student — Maqraa | `/student` | Recitations, Quran learning paths, and sessions. |
| Student — Academy | `/academy/student` | Enrolled courses, tasks, learning progress, and achievements. |
| Reader | `/reader` | Recitation assessment and listening sessions. |
| Teacher | `/academy/teacher` | Courses, lessons, students, assignments, and live teaching. |
| Parent | `/academy/parent` | Linked children's learning, reports, and restrictions. |
| Super administrator | `/admin` | Platform-wide governance, branding, settings, and administration modes. |
| Maqraa administrator | `/admin` | Quran learning and reciter operations. |
| Academy administrator | `/academy/admin` | Academy content, users, and operations. |
| Supervisors | Role-specific administrative workspaces | Student, reciter, content, fiqh, general, or quality supervision. |

Primary roles, additional Academy roles, platform access flags, and administrative modes all participate in routing and access decisions. See [authentication helpers](lib/auth.ts), [administrative roles](lib/admin/roles.ts), and [Academy access helpers](lib/academy/access.ts).

## Technology

| Layer | Implementation |
| --- | --- |
| Application | Next.js 16 App Router, React 19, TypeScript |
| Interface | Tailwind CSS 4, Radix UI components, Lucide icons, Framer Motion, next-themes |
| Database | PostgreSQL through `pg`, with query helpers and transaction support |
| Authentication | Application-managed JWT sessions with `jose`; bcrypt password verification |
| Live sessions | LiveKit client components and server SDK |
| File storage | AWS S3 for new general uploads; S3-compatible recording storage |
| Legacy media | Cloudinary compatibility for older stored files |
| Email | Nodemailer with environment or database-managed SMTP configuration |
| Certificates | Sharp and pdf-lib in the current certificate center; separate legacy rendering utilities |
| Client data and reporting | SWR, Recharts, ExcelJS, CSV helpers |
| Tests | Vitest, jsdom, and Testing Library tooling |

Authentication is implemented in [lib/auth.ts](lib/auth.ts). The file named [better-auth-config.ts](lib/better-auth-config.ts) is a compatibility adapter for legacy callers, not a separate Better Auth installation.

## Getting started

### Prerequisites

- **Node.js 24.x** and npm are a suitable baseline for the locked application and test dependencies.
- A PostgreSQL database with the application schema and relevant migrations applied.
- SMTP credentials for account verification, password recovery, and email delivery.
- AWS S3 credentials and a bucket for uploads.
- LiveKit credentials when using integrated live rooms.
- A Node.js host that supports the application's native image-processing dependencies.

### 1. Install dependencies

```bash
git clone https://github.com/sayouuuuud/motqn.git
cd motqn
npm ci
```

The repository contains both npm and pnpm lockfiles. This guide uses npm and `package-lock.json`.

### 2. Configure the environment

Create `.env.local` in the repository root:

```dotenv
# Database and application
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
JWT_SECRET=REPLACE_WITH_A_LONG_RANDOM_SECRET
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Email
SMTP_HOST=YOUR_SMTP_HOST
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=YOUR_SMTP_USERNAME
SMTP_PASSWORD=YOUR_SMTP_PASSWORD
SMTP_FROM_EMAIL=notifications@example.com
SMTP_FROM_NAME=MOTQN

# General file uploads
AWS_REGION=YOUR_AWS_REGION
AWS_S3_BUCKET_NAME=YOUR_BUCKET
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY

# Integrated live sessions
LIVEKIT_URL=wss://YOUR_LIVEKIT_HOST
NEXT_PUBLIC_LIVEKIT_URL=wss://YOUR_LIVEKIT_HOST
LIVEKIT_API_KEY=YOUR_LIVEKIT_API_KEY
LIVEKIT_API_SECRET=YOUR_LIVEKIT_API_SECRET

# Scheduled jobs
CRON_SECRET=REPLACE_WITH_A_SEPARATE_RANDOM_SECRET
```

| Setting | Behavior |
| --- | --- |
| `POSTGRES_URL` / `DATABASE_URL` | The database client prefers `POSTGRES_URL` when both are set. Configure one deliberately. |
| `JWT_SECRET` | Signs and verifies application sessions. Set an explicit secret instead of relying on the development fallback. |
| `NEXT_PUBLIC_APP_URL` | Application origin for invitations and other links. Use the deployed HTTPS origin in production. |
| SMTP variables | Configure mail transport and sender identity. `SMTP_CONNECTION_URL`, when set, takes priority over individual SMTP fields and database settings. |
| `AWS_*` variables | Configure the general upload helper. Set the region explicitly because it is also used when constructing file URLs. |
| `LIVEKIT_*` variables | Configure room access, server-side tokens, room management, and webhook verification. |
| `CRON_SECRET` | Authorizes scheduled-job endpoints through a Bearer token or `x-cron-secret` header. |

Keep secrets server-side. Only public origins and the LiveKit connection URL belong in `NEXT_PUBLIC_` variables.

**Recordings:** Dedicated `RECORDING_S3_ACCESS_KEY`, `RECORDING_S3_SECRET_KEY`, `RECORDING_S3_BUCKET`, and `RECORDING_S3_REGION` override the corresponding AWS values for recording operations. Optional `RECORDING_S3_ENDPOINT` and `RECORDING_S3_PATH_PREFIX` support a compatible endpoint and custom object prefix.

**Legacy files:** `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` are used by the compatibility code for older Cloudinary assets.

### 3. Prepare the database

The repository contains a historical migration collection under [scripts/](scripts/), beginning with [001-schema.sql](scripts/001-schema.sql). Later files add the Academy, parents, learning paths, community, recording infrastructure, certificate center, and administrative scopes.

There is no complete fresh-install migration workflow established by the existing runners:

- [scripts/migrate.sh](scripts/migrate.sh) and [scripts/run-migrations.ts](scripts/run-migrations.ts) enumerate only four early expansion migrations.
- Several filenames share numeric prefixes, and some scripts perform targeted repairs or data changes.
- Seed and QA scripts contain development data rather than production onboarding.

Review the target database against the required feature schemas before applying changes. Do not run the entire directory blindly or assume the early runner installs the full current platform.

A missing connection URL is not a complete demo mode: middleware has a preview bypass, but the database helper throws when database-backed operations run without a configured connection.

### 4. Run locally

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000). Account verification and role-specific onboarding require the configured database and mail service.

## Commands and validation

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create a production build. |
| `npm start` | Serve the production build. |
| `npm run hostinger` | Use the custom production Node.js entry point on a compatible Unix-like host. |
| `npm run lint` | Run ESLint. |
| `npm run check:i18n` | Run the translation key checker. |
| `npm test` | Run the configured Vitest suite. |
| `npm run test:watch` | Run Vitest in watch mode. |
| `npm run test:coverage` | Request coverage output; the configured provider requires a compatible `@vitest/coverage-v8` installation. |

The existing security tests cover Academy dashboard role routing and QA verification-bypass gating. They do not establish end-to-end coverage of courses, storage, email, or live sessions.

`next.config.mjs` permits builds with TypeScript errors. Run `npx tsc --noEmit` separately when validating changes.

## Deployment considerations

- **Database and services:** Provide the same required variables to the deployed server. A frontend deployment alone does not provision PostgreSQL, storage, SMTP, or LiveKit.
- **LiveKit lifecycle:** Configure the LiveKit webhook destination as `/api/livekit/webhook`. The receiver verifies signed events and updates session participation and recording lifecycle records.
- **Recording delivery:** Client multipart uploads and LiveKit Egress have separate execution paths. Configure bucket permissions and browser CORS for the operations you use; server-side recording also requires Egress support.
- **Upload access:** General uploads return conventional S3 object URLs. Their delivery permissions must match how the application reads those assets; recording playback also has signed-URL helpers.
- **Certificates:** Preserve `lib/certificate/fonts/` when packaging the application. The current certificate center uses Sharp and pdf-lib; legacy PDF helpers have separate Puppeteer/Chromium requirements.
- **Scheduled work:** Reminder, weekly-report, session-cleanup, and multipart-recovery routes require an external scheduler. They are not activated simply by deploying their files.
- **SMTP:** Without a valid transport, the email helper reports failure rather than delivering verification or reminder messages.
- **QA configuration:** Verification-bypass settings are intended for controlled test accounts. Leave them unset in normal production deployments.

## Project structure

| Path | Contents |
| --- | --- |
| `app/(public)/` | Homepage and public information pages. |
| `app/(auth)/` | Registration, login, verification, and password recovery. |
| `app/student/`, `app/reader/` | Maqraa student and reader workspaces. |
| `app/academy/` | Academy students, teachers, parents, administrators, and supervisor workspaces. |
| `app/admin/` | Platform and Maqraa administration, branding, settings, and reports. |
| `app/api/` | Authentication, learning workflows, administration, media, webhooks, and cron routes. |
| `components/` | Shared interface, learning, certificate, community, and video components. |
| `lib/academy/` | Access decisions, gamification, competitions, and parent controls. |
| `lib/certificate/` | Certificate eligibility, rendering, issuance, and role-specific handlers. |
| `lib/db-queries/` | Domain-specific database query helpers. |
| `lib/i18n/` | Locale configuration, context, and translation dictionaries. |
| `scripts/` | Schema migrations, maintenance tools, and historical reports. |
| `tests/security/` | Role-routing and QA-bypass regression tests. |
| `public/` | Branding, fonts, templates, and static assets. |

## Documentation

- [Platform documentation — English](DOCS_EN.md)
- [Platform documentation — Arabic](DOCS.md)
- [OpenAPI specification](openapi.yaml)
- [API reference notes](apis.txt)

The documentation includes legacy terminology and historical implementation details. For a particular workflow, cross-check its current route handler and supporting module.

## License

No license file is currently included in this repository. Obtain the owner's permission before reusing or redistributing the code.
