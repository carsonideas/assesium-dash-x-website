# Floating popup background verification

The Schedule route’s Add Schedule dialog was opened after the shared overlay CSS update. The popup remains a white/dark themed rounded dialog with its form controls visible, while the area around it is transparent rather than black. No black scrollable section appears inside the dialog, and the popup remains visually floating over the schedule page.

The TypeScript check and production build pass after the global popup overlay adjustment. Existing non-blocking EnhancedPayments duplicate-case and bundle-size warnings remain.

The Schedule Add Schedule dialog closed normally. Payments loaded successfully as a second route using the shared shell and is ready for representative modal verification.

The Add Payment Method dialog was also observed in the global Light theme. Its white rounded form floated over the payment page without a black overlay or black scrollable section, while all fields and actions remained readable.

The payment dialog closed through its top-right close control without a route error. The global rule therefore covers both schedule and payment popup overlays while preserving their existing close behavior.
