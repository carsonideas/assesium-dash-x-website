# Welcome card gradient toggle verification

Date: 2026-08-18

The purple welcome container containing the welcome message, exam summary, and end-to-end encryption indicator now includes an accessible in-card toggle.

The toggle switches between:

1. The existing AI System Status website gradient through the shared `hero-gradient` styling.
2. The website’s existing peach/rose/violet token gradient through `hero-peach-rose-plum`:

```css
linear-gradient(90deg, var(--light-peach), var(--light-pink), var(--light-violet));
```

The live preview confirmed that clicking the control changes the welcome card from purple to the peach/rose/violet treatment. Computed styles after switching show:

```text
hero-gradient hero-peach-rose-plum rounded-3xl p-8 mb-6 relative overflow-hidden mt-0
linear-gradient(90deg, rgb(238, 155, 89), rgb(232, 93, 152), rgb(119, 88, 220))
storedMode: peach
```

The selected mode persists in `localStorage` under `dashboard-hero-background`. The welcome copy, teacher image, encryption indicator, and dashboard metrics remain unchanged.
