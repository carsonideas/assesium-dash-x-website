# Unified Project Notes

This codebase combines the attached `assesium-dashboard-react-vite-latest.zip` dashboard with the earlier Assesium public website source.

The public website is the default application at `/`, with public pages at `/features`, `/about`, `/pricing`, `/contact`, `/blog`, `/get-started`, and `/login`.

The dashboard is available at `/dashboard`. All original dashboard routes remain available through compatibility aliases, including `/institutions`, `/ai-processing`, `/students`, `/student-details/:id`, `/reports`, `/tutoring`, `/community-groups`, `/payments`, `/enhanced-payments`, `/settings`, `/profile`, `/teachers`, `/teacher-schedule`, `/realtime-marking`, `/student-login`, and `/student-dashboard`, as well as their `/dashboard/...` equivalents.

The website’s `Launch Assesium` action and successful social login redirect to `/dashboard`. Marketing navigation uses the root-level website paths. Firebase initialization is guarded so the public Login page renders without preview credentials and uses real authentication when valid `VITE_FIREBASE_*` variables are provided.

See `ROUTE_VERIFICATION.md` for the complete route verification record.
