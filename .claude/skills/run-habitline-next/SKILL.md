---
name: run-habitline-next
description: Build, run, and drive habitline-next (Ahmed Ali's portfolio site, Next.js 16 App Router + Tailwind v4). Use when asked to start the dev server, build the site, take a screenshot of a page, verify a route renders, fill and check the contact form, or otherwise interact with the running app rather than just reading its source.
---

A Next.js 16 (App Router, Turbopack) marketing/portfolio site. There's no `chromium-cli` in this environment, so it's driven via `.claude/skills/run-habitline-next/driver.py` — a small Python + Playwright REPL with the same `nav` / `wait-for` / `click` / `fill` / `screenshot` vocabulary chromium-cli uses. Playwright's Python package and its Chromium binary are already present in this sandbox; no install step needed.

All paths below are relative to the repo root (`habitline-next/`).

## Prerequisites

Verified present in this environment already — nothing to install:

```bash
node --version      # v24.14.1
pnpm --version      # pnpm-lock.yaml is present; use pnpm, not npm/yarn
python -c "import playwright; print('ok')"   # ok
```

## Setup

```bash
pnpm install
```

## Build

```bash
pnpm build     # next build --turbopack
```

Expect a route table ending in `○ (Static)` / `● (SSG)` / `ƒ (Dynamic)` markers and no `error`/`Error` lines. `/api/contact` is the only `ƒ` (dynamic) route; everything else prerenders.

## Run (agent path)

**1. Start the dev server, polling instead of sleeping a fixed amount** — first compile can take several seconds:

```bash
(pnpm dev > /tmp/dev.log 2>&1 &)
timeout 30 bash -c 'until curl -sf http://localhost:3000 >/dev/null 2>&1; do sleep 1; done' && echo ready
```

**2. Drive it** by piping a script to `driver.py`'s stdin:

```bash
python .claude/skills/run-habitline-next/driver.py <<'EOF'
nav /
wait-for text=I design systems that scale
screenshot home
console --errors
EOF
```

Screenshots land in `.claude/skills/run-habitline-next/screenshots/<name>.png` (gitignored — regenerated each run, not committed). Loop is the same as chromium-cli: `nav` → `wait-for` the thing you need → act (`click`/`fill`/`press`) → `screenshot` → `console --errors` to confirm nothing threw.

**3. Stop the server** — Windows has no `lsof`/`pkill`, so find the PID on the port and kill it directly:

```bash
netstat -ano | grep ':3000' | grep LISTENING   # -> prints the PID in the last column
taskkill //PID <pid> //F
```

| driver.py command | what it does |
|---|---|
| `nav <path-or-url>` | Navigate; a bare path resolves against `http://localhost:3000` |
| `wait-for text=<phrase>` | Wait up to 10s for text anywhere on the page (multi-word is fine) |
| `wait-for selector=<css>` | Wait up to 10s for a CSS selector to be visible |
| `click <selector>` | Click |
| `fill <selector> <text>` | Fill an input/textarea |
| `press <key>` | e.g. `press Enter` |
| `screenshot [name]` | Full-page PNG to `screenshots/` |
| `text` | Dump `body.innerText` (first 2000 chars) — cheapest way to check content without a screenshot |
| `title` | Print `<title>` |
| `status <path>` | HTTP status only, no rendering (fast route-health check) |
| `console --errors` | Print + clear buffered `console.error`/page-error messages |
| `quit` | Close the browser |

## Run (human path)

```bash
pnpm dev   # -> http://localhost:3000, Ctrl+C to stop
```

## Test

There's no test suite (no `test` script, no Jest/Vitest config). Closest check is the type checker:

```bash
npx tsc --noEmit
```

`pnpm lint` currently fails — see Gotchas. Don't take that as a real failure; `tsc --noEmit` and `pnpm build` are what actually gate correctness here.

---

## Gotchas

- **`pnpm lint` fails on a plugin error, unrelated to your changes.** `eslint-plugin-react` 7.37.5 isn't compatible with ESLint 10 — this shipped with the original template, before any of this project's own code existed. Use `npx tsc --noEmit` and `pnpm build` to gate changes instead.
- **No `lsof`/`pkill` on Windows.** The `chromium-cli` doc's port-kill advice (`lsof -ti:3000 | xargs kill`) doesn't exist here. Use `netstat -ano | grep ':3000' | grep LISTENING` to get the PID, then `taskkill //PID <pid> //F`. Forward slashes for `taskkill` flags (`//PID`, `//F`) — Git Bash otherwise mangles a single-slash `/PID` into a path.
- **`driver.py`'s multi-word arguments only work because of `partition`, not `split`.** An earlier version used `line.split(maxsplit=2)`, which silently truncated `wait-for text=I design systems that scale` down to just `text=I` — the space inside the phrase got treated as an argument boundary. Fixed by `partition(" ")` (splits once, keeps the rest of the line intact); `fill`'s selector/value pair re-partitions that remainder itself. If you extend the command vocabulary, partition — don't split — anything whose argument might contain spaces.
- **First `nav` after a fresh `pnpm dev` can be slow.** Turbopack compiles each route on first request. `driver.py`'s `nav` waits for `networkidle` (30s timeout) rather than a fixed sleep, which absorbs this; don't shorten that timeout.

## Troubleshooting

- **`curl: (7) Failed to connect`** while polling for the dev server: it's still compiling. The 30s timeout in the "Run (agent path)" snippet above is usually enough; if it isn't, `cat /tmp/dev.log` for the actual error rather than just raising the timeout.
- **`EADDRINUSE` / dev server won't start**: a previous run is still bound to :3000. Run the `netstat`/`taskkill` sequence above, then retry.
- **`driver.py` exits 1 with `FAILED: Locator.wait_for: Timeout ...`**: either the text/selector genuinely isn't on the page (real bug) or you navigated before the route finished compiling — check with `text` first to see what actually rendered before assuming the selector is wrong.
