# Dashboard scroll, chart, and View All verification

After the layout update, scrolling inside the middle Dashboard pane moved the Performance Trends, Subject Distribution, and Recent Exam Results content while the left sidebar and right My Profile/Pending Reviews/AI System Status/Department panel stayed fixed in place.

The Performance Trends card retains both existing selectors: Monthly/Weekly/Yearly and Last 7 Days/Last 30 Days/Last 90 Days. Its line chart now uses the reference design: indigo and pink series, filled areas, point-style bottom legend, original Segoe UI typography, responsive 300px presentation, and original-style grid/tick/tooltip colors.

Dashboard View All destinations are wired as follows: Recent Exam Results -> `/students`, Pending Reviews -> `/ai-processing`, Department -> `/teachers`.

Browser verification completed with the unchanged controls: selecting `Yearly` switched the x-axis labels to 2022–2026 and rendered the reference-style indigo/pink trend lines; selecting `Last 90 Days` updated the plotted values while preserving the Yearly labels and both selectors. No scroll or runtime error occurred.

View All route verification: Recent Exam Results opened `/students`; Pending Reviews opened `/ai-processing`. Both destinations rendered their respective routed pages without a runtime error.

During the final Department View All check, the browser session briefly returned an empty about:blank view after navigation; no application code error was reported. The canonical preview will be reopened before the final route check.

Department View All opened `/teachers`, and the Teachers page rendered successfully. All three Dashboard View All controls now route to working destination pages.
