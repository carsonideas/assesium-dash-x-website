# Support chat verification

The main Dashboard now has a visible header Support button beside the date-range control. Clicking it opens the existing bottom-right AI Assistant popup with its header, greeting, quick suggestions, support options, and message input.

The standalone Dashboard also mounts the same FloatingAIChat instance, while routed pages continue to mount it through ResponsiveLayout. The shared shell Support button, Teacher Admin Contact Support menu action, and sidebar profile Contact Support action all dispatch the same open event.

On `/settings`, the shared shell Support button was clicked and opened the same bottom-right AI Assistant popup, including the chat header, greeting, quick suggestions, support options, and message input. This confirms both the standalone Dashboard and routed pages use the expected Support-to-chat behavior.
