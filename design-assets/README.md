# Portfolio redesign assets

The production site uses the optimized WebP files in `public/images/work/`. This folder preserves originals, prompts and source attribution without serving the working files publicly.

## Visual direction

An editorial software portfolio: oversized typography, ink and cobalt on a quiet ivory surface, generous spacing, product imagery as the main proof, and concise calls to action. The homepage stays focused on client enquiries; architecture details remain available within each case study.

UI/UX Pro Max was consulted from [its upstream skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md). Its generated style matches were not appropriate to this brand, so its accessibility, image-performance and interaction rules informed the implementation while the visual direction was chosen for this portfolio. The skill was read/run from ignored scratch space; it is not a new runtime dependency.

## Asset provenance

| Production asset                                                         | Origin                                                                                                                                                                        |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `trackhrs-mockup.webp`                                                   | Built-in image generation using the real TrackHRS Work and Project Board documentation screenshots, with seeded demo data.                                                    |
| `trackhrs-mobile-mockup.webp`                                            | Built-in image generation based on the Flutter Home, Projects, navigation and theme source. Illustrative sample data; not a captured screen or app-store release claim.       |
| `trackhrs-{board,work,deals,invoices,workload,people,integrations}.webp` | Unmodified documentation captures from `trackhrs-front/public/images/docs/`; demo workspace.                                                                                  |
| `agentx-mockup.webp`                                                     | Built-in image generation based on the real workspace and home documentation captures in `agentx-mvp/public/media/docs/en/`, adapted to the user's requested AgentX branding. |
| `agentx-workflow-mockup.webp`                                            | Built-in image generation based on code editor and mobile preview documentation captures, adapted to AgentX branding.                                                         |
| `hysab-official.webp`                                                    | Official transparent product artwork from hysabkytab.com, resized and encoded as WebP.                                                                                        |
| `hysab-{pfm,insights,savings}.webp`                                      | Official SVG product artwork rendered to transparent WebP. Source URLs are in `hysab-sources.txt`.                                                                            |

Full generation prompts are preserved in `desktop-generation-prompts.md`, `trackhrs-mobile-prompt.txt` and `agentx-workflow-prompt.txt`. `generation-prompts.txt` describes early concepts that were superseded by actual product references; those concepts are retained here only as unused explorations.

All AI-generated visuals are labelled as mockups in the interface. Hysab Kytab interface imagery is shown for context; it does not imply Ahmed designed the interface.

## Validation

Production compilation, TypeScript, content lint, representative HTTP routes, internal homepage links and image optimization were checked. Contact API validation was exercised without sending an email. Browser interaction and viewport screenshot verification could not be completed because the browser access host was unavailable.

The redesign is a local repository change. No live deployment was performed.
