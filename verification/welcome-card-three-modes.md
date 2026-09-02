# Welcome card three-mode background verification

Date: 2026-08-18

The welcome card now supports three selectable background modes through one in-card toggle:

| Mode | Implementation |
|---|---|
| Original Purple | The existing `hero-gradient` background. |
| AI Status Gradient | The existing shared `bg-gradient-to-br from-purple-500 to-purple-600` class, which receives the website light-mode gradient rule when the dashboard is in light mode. |
| Peach Rose Plum | The existing website palette variables through `hero-peach-rose-plum`, using `var(--light-peach)`, `var(--light-pink)`, and `var(--light-violet)`. |

The live preview was exercised through the full cycle: Original Purple → AI Status Gradient → Peach Rose Plum → Original Purple. Computed verification at the Peach Rose Plum state showed:

```text
hero-gradient hero-peach-rose-plum rounded-3xl p-8 mb-6 relative overflow-hidden mt-0
linear-gradient(90deg, rgb(238, 155, 89), rgb(232, 93, 152), rgb(119, 88, 220))
storedMode: peach
nextModeLabel: Switch welcome background to original purple gradient
```

The selected state persists in local storage under `dashboard-hero-background`, and the welcome content remains unchanged.
