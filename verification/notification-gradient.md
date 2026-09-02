# Notification gradient verification

Date: 2026-08-17

The `/community-groups` live preview was opened and the Mathematics Teachers conversation was selected. A notification popup appeared with the message `Opened Mathematics Teachers` and the popup rendered using the shared `notification-gradient` class.

The shared notification treatment now uses the exact Contact-style layers:

```css
radial-gradient(circle at 10% 0%, rgba(255, 198, 145, 0.24), transparent 31%),
radial-gradient(circle at 92% 100%, rgba(116, 84, 191, 0.18), transparent 34%),
linear-gradient(135deg, rgba(255, 253, 249, 0.97), rgba(247, 242, 253, 0.96));
```

It also has the exact top accent rule:

```css
linear-gradient(90deg, #e58b5d, #d9658e, #7454bf);
```

The same utility is applied to NotificationCenter, Community & Groups, Enhanced Payments, Teacher Schedule, and Tutoring page-local notifications.
