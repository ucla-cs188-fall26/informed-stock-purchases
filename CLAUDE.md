# Informed Stock Purchases

A Chrome extension that helps individual investors understand companies and financial terms while browsing. It scans the page you are reading, highlights investment terms and company names, and shows a hover card with a plain-language explanation, a company overview, and recent news.

## Problem statement

Individual investors want to understand a company's background and financial health before they buy its stock. The information they need is scattered across many sources and is often written in complex, technical language.

## Persona and usage scenario

Our users are interested in investing but find stock research convoluted. They want to make informed decisions and find promising companies. Scattered information and unfamiliar financial terms make the research slow and hard. With the extension, they keep reading an article as usual, hover over an unfamiliar term or company name, and get a short, plain explanation in place.

## Project context

- The team is US-based, and the target market is US investors and US-listed companies.
- Everything in this repository is written in English: code, comments, commit messages, docs, UI strings, and dictionary content.
- We plan to publish to the Chrome Web Store eventually. The MVP is for local use, but design choices must not block a store release (see below).

## Store-readiness rules

These rules apply from the MVP onward, so we will not need a large refactor later.

- Manifest V3 only. Do not load or execute remotely hosted code; all JS is bundled.
- Never ship API keys in the extension. All third-party API calls go through our backend.
- Keep permissions minimal. The extension's `host_permissions` should only list our own backend, not third-party data sources.
- Do not send page content to the backend. Send only the matched term or ticker.
- Use only data sources whose terms allow our use. No scraping.
- Hover cards show a disclaimer: "For informational purposes only. Not investment advice."

## Repository layout

npm workspaces monorepo:

- `frontend/`: the Chrome extension (WXT + React + TypeScript).
  - `entrypoints/content/`: scans the page (`scanner.ts`, plain TS with no React) and renders a single React `HoverCard` inside a shadow root.
  - `entrypoints/background.ts`: the service worker. It is the only part of the extension that calls the backend, and it caches results in `chrome.storage.local`.
  - `entrypoints/options/`: the settings page (React).
  - `lib/dictionary/`: investing terms (`terms.ts`) and the matching logic (`index.ts`). Company names and tickers live in `shared/src/companies.ts` so the backend can use them too.
- `backend/`: Hono API server (`src/app.ts` defines the routes, `src/index.ts` runs it on Node). It currently returns mock data.
- `shared/`: types for API responses and extension messages. Change these first when changing an API contract.

## Commands

- `npm run dev:backend`, `npm run dev:frontend`: local development
- `npm run typecheck`: run before committing
- `npm run build`: production build of the extension
