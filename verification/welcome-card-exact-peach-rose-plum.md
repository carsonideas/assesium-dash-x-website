# Welcome card exact Peach Rose Plum verification

Date: 2026-08-18

The Peach Rose Plum mode now uses the exact website gradient requested for the Contact, Home, Pricing, and ready-to-transform card styling:

```css
linear-gradient(90deg, #e58b5d, #d9658e, #7454bf)
```

Live computed styles confirm the browser renders it as:

```text
linear-gradient(90deg, rgb(229, 139, 93), rgb(217, 101, 142), rgb(116, 84, 191))
```

The active welcome-card classes are:

```text
hero-gradient hero-peach-rose-plum rounded-3xl p-8 text-white
```

The three-mode cycle remains intact: Original Purple → AI Status Gradient → Peach Rose Plum → Original Purple. The selected Peach Rose Plum mode persists under `dashboard-hero-background`.
