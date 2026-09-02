# Welcome card Ready surface verification

Date: 2026-08-18

The Peach Rose Plum welcome-card mode now reuses the exact soft light-mode surface used by the website’s Contact, Home, Pricing, and Ready to get started cards:

```css
radial-gradient(circle at 10% 0%, rgba(255, 198, 145, 0.26), transparent 31%),
radial-gradient(circle at 92% 100%, rgba(116, 84, 191, 0.2), transparent 34%),
linear-gradient(135deg, rgba(255, 253, 249, 0.97), rgba(247, 242, 253, 0.96));
```

Live computed styles confirm those exact layers, a `1px solid rgba(116, 84, 191, 0.2)` border, the existing Contact-style shadow, and dark readable heading text. The active class is `hero-gradient hero-peach-rose-plum`, and the selected mode persists as `peach`.

The other two welcome-card modes remain available: Original Purple and AI Status Gradient.
