# Real-time Marking theme verification

The `/realtime-marking` route now renders a route-local header button labeled `Dark` in Light mode and `Light` in Dark mode. Clicking it changes the shared theme store and applies the scoped `.is-dark` styles to the Real-time Marking route.

Browser verification confirmed that Light mode retains readable white panels and indigo/purple accents, while Dark mode changes the route surfaces to deep indigo/slate, updates panel borders and text contrast, darkens inputs and answer placeholders, and keeps the existing green/orange/blue action buttons readable. Clicking the button again restores Light mode and keeps the marking panels and controls intact.
