# Informed Stock Purchases

A Chrome extension that explains investing terms and companies when you hover over them on any web page.

## Repository layout

| Folder | What it is |
|---|---|
| `frontend/` | Chrome extension (Manifest V3), built with [WXT](https://wxt.dev), React, and TypeScript |
| `backend/` | API server built with [Hono](https://hono.dev). It calls third-party data sources and AI APIs |
| `shared/` | TypeScript types shared by the frontend and backend |

## Getting started

Requirements: Node.js 20 or later.

```sh
npm install

# Terminal 1: start the backend on http://localhost:8787
npm run dev:backend

# Terminal 2: start the extension in dev mode (opens Chrome with the extension loaded)
npm run dev:frontend
```

Open any page that mentions "EPS", "market cap", or "Apple", then hover over the underlined word.

To load a production build manually instead, run `npm run build`, open `chrome://extensions`, turn on **Developer mode**, click **Load unpacked**, and select `frontend/.output/chrome-mv3`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev:backend` | Runs the backend with auto-reload |
| `npm run dev:frontend` | Runs the extension in dev mode with hot reload |
| `npm run build` | Builds the extension into `frontend/.output/chrome-mv3` |
| `npm run typecheck` | Type-checks every workspace |
