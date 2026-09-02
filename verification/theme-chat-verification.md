# Dashboard theme and chat verification

Date: 2026-08-17

The `/community-groups` route rendered the Messages & Chats tab with a controlled conversation search field, group rows, direct-message rows, attachment control, message input, and send control. Selecting Mathematics Teachers opened the conversation header and thread and produced a visible notification toast reading `Opened Mathematics Teachers`. The toast used the peach-to-rose-to-plum gradient styling.

The Dashboard page-level FloatingAIChat mount was removed so the shared shell provides a single bottom support launcher instead of two duplicate support icons.

The dashboard theme store now supports a persisted `peach-plum` mode, applies a document-level class/data attribute, and cycles light → dark → dashboard-dark → peach-plum → light. The AI System Status card uses the restored purple-violet-pink gradient class.


The live `/dashboard` page showed the restored purple-violet-pink AI System Status card. Only one bottom-right `Need help? Chat with AI` launcher was present. Clicking the theme toggle changed the visible label from `Light mode` to `Dark mode` and switched the whole dashboard into the dashboard-dark appearance while preserving the status gradient and support launcher.


The theme cycle advanced from Dashboard Dark mode to `Peach Rose Plum mode`. The live screenshot showed the peach/rose/plum palette applied across the shell, sidebar, cards, profile, charts, and background. The AI System Status card retained its restored purple-violet-pink gradient.
