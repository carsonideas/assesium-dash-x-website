# Dashboard branding verification

Date: 2026-08-17

The dashboard top-left Assesium branding is now an accessible React Router link with the hint `Go to the Assesium website homepage`, and the extracted page content confirms it links to `/`.

The initially reused `/manus-storage/assesium-logo_3c863d93.png` path is not available in the local preview because the storage proxy responds with `Storage proxy not configured`. A local copy of the website logo must therefore be located or bundled before final delivery so the dashboard does not show a broken image.


The final live preview renders `/assesium-logo.png` in the dashboard branding, and the branding control is exposed as an anchor with the hint `Go to the Assesium website homepage`. Clicking it navigated from `/dashboard` to `/`, where the marketing homepage rendered with the Assesium website branding.
