#!/usr/bin/env python3
"""
Browser driver for habitline-next (Next.js dev server). No chromium-cli in
this environment, so this is a from-scratch stand-in: same nav / wait-for /
click / fill / screenshot vocabulary chromium-cli uses, implemented with
Python Playwright (proven available in this sandbox; no npm dependency added).

Usage: pipe a script to stdin, one command per line.

    python .claude/skills/run-habitline-next/driver.py <<'EOF'
    nav /
    wait-for text=I design systems that scale
    screenshot home
    console --errors
    EOF

Commands:
  nav <path-or-url>          Navigate. A bare path is joined to --base-url (default http://localhost:3000).
  wait-for text=<string>     Wait (10s) for text to appear anywhere on the page. May contain spaces.
  wait-for selector=<css>    Wait (10s) for a CSS selector to be visible.
  click <selector>           Click a CSS selector.
  fill <selector> <text>     Fill an input/textarea (goes through Playwright's real input pipeline).
  press <key>                Keyboard.press, e.g. Enter.
  screenshot [name]          Full-page screenshot -> screenshots/<name-or-index>.png (relative to this file).
  text                       Print page.inner_text('body'), trimmed to 2000 chars.
  title                      Print the page title.
  status <path>              GET <path> and print its HTTP status (no rendering).
  console --errors           Print any console.error messages seen since the last check, then clear the buffer.
  quit / exit                Close the browser and stop.

Exits non-zero if any command raises (bad selector, timeout, etc.) so a
CI-style caller can tell success from failure without parsing output.
"""

import sys
import argparse
from pathlib import Path
from urllib.request import urlopen
from urllib.error import HTTPError

from playwright.sync_api import sync_playwright

SCRIPT_DIR = Path(__file__).resolve().parent
SHOT_DIR = SCRIPT_DIR / "screenshots"


def run(base_url: str, headed: bool) -> int:
    SHOT_DIR.mkdir(exist_ok=True)
    console_errors = []
    shot_index = 0

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=not headed)
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda exc: console_errors.append(f"pageerror: {exc}"))

        def resolve(path_or_url: str) -> str:
            return path_or_url if path_or_url.startswith("http") else base_url.rstrip("/") + "/" + path_or_url.lstrip("/")

        try:
            for raw_line in sys.stdin:
                line = raw_line.strip()
                if not line or line.startswith("#"):
                    continue
                # partition (not split) so a multi-word argument -- 'wait-for text=I design
                # systems that scale' -- survives as one string instead of being chopped at
                # the 3rd/4th word. Only `fill` has two arguments, and re-partitions `rest` itself.
                cmd, _, rest = line.partition(" ")
                rest = rest.strip()

                if cmd == "nav":
                    url = resolve(rest)
                    page.goto(url, wait_until="networkidle", timeout=30000)
                    print(f"nav {url} -> ok")

                elif cmd == "wait-for":
                    if rest.startswith("text="):
                        page.get_by_text(rest[5:], exact=False).first.wait_for(timeout=10000)
                    elif rest.startswith("selector="):
                        page.locator(rest[9:]).first.wait_for(state="visible", timeout=10000)
                    else:
                        raise ValueError(f"wait-for needs text= or selector=, got: {rest}")
                    print(f"wait-for {rest} -> ok")

                elif cmd == "click":
                    page.click(rest, timeout=10000)
                    print(f"click {rest} -> ok")

                elif cmd == "fill":
                    selector, _, value = rest.partition(" ")
                    page.fill(selector, value, timeout=10000)
                    print(f"fill {selector} -> ok")

                elif cmd == "press":
                    page.keyboard.press(rest)
                    print(f"press {rest} -> ok")

                elif cmd == "screenshot":
                    name = rest if rest else f"shot-{shot_index}"
                    shot_index += 1
                    out = SHOT_DIR / f"{name}.png"
                    page.screenshot(path=str(out), full_page=True)
                    print(f"screenshot -> {out}")

                elif cmd == "text":
                    body = page.inner_text("body")
                    print(body[:2000])

                elif cmd == "title":
                    print(page.title())

                elif cmd == "status":
                    url = resolve(rest)
                    try:
                        code = urlopen(url, timeout=10).getcode()
                    except HTTPError as e:
                        code = e.code
                    print(f"status {url} -> {code}")

                elif cmd == "console":
                    if rest == "--errors":
                        if console_errors:
                            for e in console_errors:
                                print(f"console error: {e}")
                        else:
                            print("console --errors -> none")
                        console_errors.clear()

                elif cmd in ("quit", "exit"):
                    break

                else:
                    raise ValueError(f"unknown command: {cmd}")
        finally:
            browser.close()

    return 0


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--base-url", default="http://localhost:3000")
    parser.add_argument("--headed", action="store_true", help="show the browser window instead of running headless")
    args = parser.parse_args()

    try:
        sys.exit(run(args.base_url, args.headed))
    except Exception as exc:
        print(f"FAILED: {exc}", file=sys.stderr)
        sys.exit(1)
