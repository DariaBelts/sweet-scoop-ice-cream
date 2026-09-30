# Sweet Scoop Ice Cream 🍦

> **Happiness in Every Scoop**

A marketing website for **Sweet Scoop Ice Cream**, a fictional neighborhood ice cream shop in Chicago. It's a static frontend built with React and Vite, served in production by nginx inside a Docker container.

This repository is used as the sample application for a DevOps course covering GitHub Actions, ESLint, SonarQube, Trivy, Docker, Amazon ECR, Kubernetes, Helm, and Argo CD.

---

## Project

| | |
| --- | --- |
| **Framework** | React 19 + Vite |
| **Language** | JavaScript (JSX) |
| **Styling** | Plain CSS with custom properties (no UI framework) |
| **Linting** | ESLint 10 (flat config) with React Hooks and React Refresh rules |
| **Runtime** | nginx (alpine), unprivileged, port `8080` |
| **Backend** | None. The site is fully static. |

### Features

- Hero section with an illustrated, animated triple-scoop cone
- Eight flavor cards with SVG illustrations, prices, and hover effects
- "Sweet Deal of the Week" promotion with a reveal-the-coupon button
- About section with shop story and statistics
- "Why Choose Us" feature cards and customer reviews
- Contact section with hours (today's hours highlighted) and an illustrated map
- Responsive layout for desktop, tablet, and mobile, with an accessible mobile menu
- Respects the `prefers-reduced-motion` accessibility setting

### Project structure

```
sweet-scoop/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # Reusable React components, each with its own CSS file
│   ├── data/
│   │   └── siteData.js    # All business content (flavors, hours, reviews, ...)
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── App.jsx
│   ├── index.css          # Design tokens and global styles
│   └── main.jsx
├── .dockerignore
├── .gitignore
├── Dockerfile             # Multi-stage build: node:22-alpine -> nginx:alpine
├── eslint.config.js
├── index.html
├── nginx.conf             # SPA routing, gzip, caching, security headers, /healthz
├── package.json
├── package-lock.json
├── sonar-project.properties
└── vite.config.js
```

To change shop details such as prices, flavors, hours, or contact info, edit `src/data/siteData.js`.

---

## Requirements

- **Node.js** 20.19+ or 22.12+ (Node 22 LTS recommended)
- **npm** 10+
- **Docker** 20.10+ (only needed for container builds)

Check your versions:

```bash
node -v
npm -v
docker --version
```

---

## Installation

```bash
git clone <your-repository-url> sweet-scoop
cd sweet-scoop
npm install
```

In CI, use `npm ci` so installs match `package-lock.json` exactly.

---

## Development

Start the Vite dev server with hot module replacement:

```bash
npm run dev
```

Open <http://localhost:5173>.

---

## Linting

```bash
npm run lint
```

ESLint is configured in `eslint.config.js` and checks all `.js` and `.jsx` files. The `dist/` folder is ignored. The command exits with a non-zero code when it finds errors, so it can be used as a CI quality gate.

---

## Production build

```bash
npm run build
```

The optimized static site is written to `dist/`. To preview the production build locally:

```bash
npm run preview
```

Open <http://localhost:4173>.

---

## Docker build

The `Dockerfile` uses a multi-stage build:

1. **Build stage** (`node:22-alpine`): runs `npm ci` and `npm run build`.
2. **Production stage** (`nginx:alpine`): copies only `dist/` and `nginx.conf`, runs as the non-root `nginx` user, and listens on port **8080**.

```bash
docker build -t sweet-scoop:v1 .
```

## Docker run

```bash
docker run -d --name sweet-scoop -p 8080:8080 sweet-scoop:v1
```

Open <http://localhost:8080>.

Useful commands:

```bash
# Health endpoint (also used by the image HEALTHCHECK)
curl http://localhost:8080/healthz

# Container status and health
docker ps

# Logs
docker logs -f sweet-scoop

# Stop and remove the container
docker stop sweet-scoop && docker rm sweet-scoop
```

---

## SonarQube

`sonar-project.properties` defines the project key `sweet-scoop` and scans the `src` directory.

---

## Available npm scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Serve the production build locally |

---

© Sweet Scoop Ice Cream. Made with 🍦 in Chicago.
