# Dashboard interaction verification

The Dashboard preview renders four metric cards with the expected labels and live values: 2,147,733 Total Students, 847 Papers Marked, 94% AI Accuracy, and 12 Pending Review. Browser element inspection confirms all four are buttons.

Performance Trends now exposes two working selectors: the preserved `Monthly` view selector with `Weekly` and `Yearly`, plus the original-style time range selector with `Last 7 Days`, `Last 30 Days`, and `Last 90 Days`. Selecting `Weekly` changed the chart labels from months to weekdays in the preview.

Subject Distribution exposes the preserved `This Term` period selector plus a working institution selector beginning with `All Institutions` and the original institution names.

Recent Exam Results lists five rows with original status labels (`Completed`, `Under Review`, `Pending`) and per-row View Details and Download Report buttons.

The Total Students metric card was clicked successfully and routed to `/students`, where the Students route rendered normally. A subsequent verification navigation used an incomplete preview host and returned `Invalid host`; this was a browser URL typo, not an application error. The canonical preview URL remains `https://3000-isnf3q8ahzjh9ggzai90c-1b48792b.us3.manus.computer`.

The AI Accuracy metric card was clicked successfully and routed to `/ai-processing`, where the AI Processing route rendered its exam-processing controls and charts normally. The Students and AI Processing destinations therefore match the restored Dashboard card handlers.

The first Recent Exam Results eye action was clicked successfully and routed to `/students/S10045`. The Student Details page rendered with its profile, performance charts, term selector, exam history, and Download Report action.

The first exam-result Download Report icon was activated successfully. The Dashboard remained on the same route and the report generator handler executed without a runtime error; the icon now performs a real PDF export instead of the original no-op placeholder.

Real-time Marking opened with its local theme control showing `Dark` while the global top-bar control showed `Light mode`, confirming the route defaults to Light independently. Clicking the route-local `Dark` control changed only the Real-time Marking workspace to dark styling; the shared shell and global theme control remained in the global Light state, and the local control changed to `Light` for reversal.

With the global website switched to Dark, the Real-time Marking local control was clicked again and returned the route workspace to Light. The top bar remained Dark mode while the route-local control showed `Dark`, confirming independent per-route theme manipulation in both directions.

After the final rebuild and restart, the Dashboard loaded in the active global Dashboard Dark theme with all restored controls visible. Selecting `Last Term` in Subject Distribution updated the selector without errors, and the metric cards, chart selectors, status badges, and eye/download action buttons remained present and readable.

Build verification: `pnpm check` passed and `pnpm build` completed successfully. Non-blocking existing warnings remain in EnhancedPayments duplicate switch cases and the bundle-size warning.
