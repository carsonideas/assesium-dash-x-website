# Assesium Route Integration Checklist

- [x] Clone and inspect the original Assesium repository source tree.
- [x] Inventory all original routes and map them to React pages.
- [x] Inventory shared layouts, navigation, dialogs, forms, tables, charts, and reusable components.
- [x] Compare original source behavior with the current project implementation.
- [x] Build a shared authenticated-style dashboard shell using the current purple/orange palette.
- [x] Implement the Dashboard route and preserve its existing charts, profile, review, and results features.
- [x] Implement Institutions route with original page structure and working controls.
- [x] Implement AI Processing route with original page structure and working controls.
- [x] Implement Students route with original page structure and working controls.
- [x] Implement Teachers route with original page structure and working controls.
- [x] Implement Schedule route with original page structure and working controls.
- [x] Implement Reports route with original page structure and working controls.
- [x] Implement Tutoring route with original page structure and working controls.
- [x] Implement Community/Groups route with original page structure and working controls.
- [x] Implement Payments route, including the original payment/session interaction where applicable.
- [x] Implement Settings route with original page structure and working controls.
- [x] Connect every sidebar route and all cross-page navigation.
- [x] Connect buttons, tabs, dropdowns, filters, sorting, forms, modals, and dismiss actions.
- [x] Replace non-functional placeholders with real local UI state and sensible empty/success/error states.
- [x] Run TypeScript checks and production build.
- [x] Verify every route in the browser and resolve console/runtime errors.
- [x] Create a final downloadable ZIP of the verified project.
- [x] Save a checkpoint for the completed implementation.

## Upload New Exam Paper Modal Crash Fix

- [x] Reproduce the close-button crash caused by an undefined `type` binding.
- [x] Patch the modal close handler and verify open, close, submit, and cancel flows.

## Sidebar Teacher Admin Menu

- [x] Connect the profile-card three-dot control to the Teacher Admin dropdown options.
- [x] Verify the menu actions from both the top bar and sidebar entry points.

## Final ZIP Delivery

- [x] Create a clean ZIP from the latest verified project checkpoint.
- [x] Attach the ZIP for download.

## Real-time Marking Theme

- [x] Add route-specific Light/Dark theme control to Real-time Marking.
- [x] Verify the route content remains readable and visually consistent in both modes.

## Updated ZIP Delivery

- [x] Package the latest code including the Real-time Marking theme update.
- [x] Attach the updated ZIP for download.

## Dashboard Original Interactions and Independent Real-time Theme

- [x] Restore metric-card routes and live count behavior.
- [x] Restore original chart dropdowns and subject-distribution controls.
- [x] Restore exam-result status/action design with working eye and download routes.
- [x] Decouple Real-time Marking Light/Dark state from the global website theme.
- [x] Verify all updated Dashboard and Real-time Marking interactions.

## Real-time Marking Global Theme Reversion

- [x] Reconnect Real-time Marking to the global Light/Dark/Dashboard Dark theme store.
- [x] Verify that the route follows global theme changes and retains its layout.

## Support Chat Popup

- [x] Connect Support in the shared shell to the bottom chat popup.
- [x] Connect Support on the main Dashboard to the same popup.
- [x] Verify both Support entry points open the chat popup.

## Latest ZIP Delivery

- [x] Package the latest verified code including Support-to-chat wiring.
- [x] Attach the updated ZIP for download.

## Central Scroll and Original Performance Trends

- [x] Restore scrolling to the middle content pane only.
- [x] Match the original Performance Trends chart design and data for Yearly and Last 90 Days.
- [x] Preserve all existing Performance Trends dropdowns and verify both requested states.
- [x] Route every Dashboard View All button to its respective destination page.

## Dashboard ZIP Delivery

- [x] Package the latest verified Dashboard update.
- [x] Attach the ZIP for download.

## Floating Popup Backgrounds

- [x] Remove black backgrounds from scrollable sections inside all popups.
- [x] Verify Add Schedule and representative popup flows in Light, Dark, and Dashboard Dark themes.

## Real-Time Date & Scroll Containment

- [x] Update date rendering across the Dashboard and ResponsiveLayout shell to display the actual current date dynamically.
- [x] Audit all routes to ensure only the central content area scrolls while sidebar and top bar remain fixed.
- [x] Build and verify scrolling behavior and real-time date accuracy in the browser.

## Status

The route integration is complete. The current design constraint remains the purple/orange dashboard palette, with a new Dashboard Dark slate-blue theme added alongside Light and Dark. The project remains frontend-only; no backend, database, or payment processing secrets were added. Detailed browser checks are recorded in `route-verification.md`. TypeScript and production build checks pass with only the existing non-blocking duplicate-case and bundle-size warnings.

## Profile Synchronization & Dashboard Routing

- [x] Sync Dashboard sidebar profile name and avatar with localStorage state updated from the Settings / Profile route.
- [x] Connect the Dashboard three-dot menu next to the profile to the Teacher Admin options (Update Profile, Settings, Contact Support, Log Out).
- [x] Wire Pending Reviews item actions and arrows to navigate to AI Processing / specific exam reviews.
- [x] Wire Department item actions and arrows to navigate to Teachers or Department details.
- [x] Run type/build checks and verify interactions in the browser.

## Dashboard Container Unification

- [x] Wrap Dashboard in the shared `app-shell` and rounded glass container structure used by `ResponsiveLayout` so its border-radius and window layout match all other routes.
- [x] Run build checks and verify visual container parity across Dashboard and routed pages.

## Dashboard Mobile & Top Bar Alignment

- [ ] Align Dashboard top bar structure with ResponsiveLayout (theme toggle, Apr-Jun selector, Support, profile dropdown, and three-dot account menu).
- [ ] Add mobile sidebar toggle and icon-only collapsible sidebar for mobile mode.
- [ ] Ensure the Dashboard layout flexes correctly on mobile and tablet screen sizes.
- [ ] Run build and browser verification across desktop and mobile viewports.

## Icon-Only Mobile Navigation Across All Routes

- [ ] Update ResponsiveLayout sidebar to show icons only when open on mobile viewports.
- [ ] Update Dashboard sidebar to show icons only when open on mobile viewports and match ResponsiveLayout top bar controls.
- [ ] Build and verify mobile icon-only navigation and top-bar consistency across all routes.

## Collapsible Desktop Sidebar & Icon-Only Mobile Menu

- [ ] Add sidebar collapse/expand toggle button for desktop view in ResponsiveLayout and Dashboard.
- [ ] Support icon-only state when collapsed on desktop, displaying tooltips or icon-only navigation items.
- [ ] Ensure mobile drawer restricts navigation items to icons-only (or compact icon view) as requested.
- [ ] Run build and browser verification for desktop collapse/expand and mobile icon-only behavior.

## Consistent Modal Backdrop Blur

- [x] Audit modal wrapper components (`ActionModal`, `ModalProvider`, student/institution dialogs, etc.) to ensure backdrop blur (`bg-black/50 backdrop-blur-sm`) is applied consistently.
- [x] Verify popups (adding students, institutions, schedule, payments) in the browser.

## Remaining Popups Backdrop Blur & Desktop/Mobile Sidebar Collapse

- [x] Ensure all remaining dialog overlays (TeacherDetails, TeacherSchedule, ActionModal, StudentModal, InstitutionModal, etc.) include `backdrop-blur-sm`.
- [x] Implement desktop sidebar collapse/expand toggle (icon-only versus full wording) in `ResponsiveLayout` and `Dashboard`.
- [x] Enforce icon-only navigation in mobile drawers across all routes.
- [x] Run build and browser verification.

## Students Horizontal Scroll & Top-Bar Parity

- [x] Update `Students.tsx` table/cards container with horizontal scroll wrapper for mobile views.
- [x] Wire student rows/cards to navigate to student details on click (matching Teachers route).
- [x] Unify Dashboard and routed top bars while maintaining exact Dashboard icon sizes.
- [x] Run build and browser verification.

## Dashboard Date-Range Control Color & Size Restoration

- [x] Restore the original orange gradient / background and original padding/sizing for the "Apr - Jun 2026" button in `Dashboard.tsx`.
- [x] Run build and browser verification.

## Responsive Collapsible Sidebar & Icon-Only Mobile Navigation

- [x] Add persistent sidebar collapse state across `ResponsiveLayout` and `Dashboard`.
- [x] Implement desktop collapse/expand toggle button in both layouts.
- [x] Enforce icon-only sidebar on smaller screen widths and mobile viewports.
- [x] Run build and browser verification across viewports.

## Dashboard Container Conformity & Permanent Icon Rail

- [x] Ensure `Dashboard.tsx` uses exact same outer container (`app-shell` and `route-page-surface` with `rounded-[34px]`) as `ResponsiveLayout`.
- [x] Fix sidebar icon layout so icons remain permanently visible and correctly positioned whether expanded or collapsed.
- [x] Run build and browser verification.

## Shared Container Dashboard Refactor

- [x] Wrap Dashboard in `ResponsiveLayout` (via `ShellRoute`) in `App.tsx` just like all other routes.
- [x] Refactor `Dashboard.tsx` to render pure page content without duplicate outer shell/sidebar markup.
- [x] Run build and browser verification.

## Mobile Hamburger Menu Icon Fix

- [x] Inspect mobile drawer in `ResponsiveLayout.tsx` to ensure menu icons and touch targets are visible and functional.
- [x] Run build and browser verification.

## Strict Icon-Only Mobile & Collapsed Desktop Menu

- [x] Force icon-only layout when mobile menu drawer is open (`w-20` instead of `w-64`, centered icons with tooltips/titles).
- [x] Ensure desktop collapsed state also maintains an explicit `w-20` icon-only rail with visible icons.
- [x] Run build and browser verification.

## Smallest-Screen Mobile Icon Touch Targets

- [x] Ensure mobile icon rail in `ResponsiveLayout.tsx` has correct padding, z-index, and pointer events so tiny screens can tap every icon successfully.
- [x] Run build and browser verification.

## Mobile Icon Navigation Repair

- [x] Ensure mobile icon links (`Link` components in `ResponsiveLayout.tsx`) properly trigger router navigation without race conditions or premature unmounting.
- [x] Run build and browser verification.

## Icon-Only Mobile Upload & Profile

- [x] Update `ResponsiveLayout.tsx` bottom upload button and profile card to collapse to icons when `isMobileSidebarOpen` or `isSidebarCollapsed` is active.
- [x] Run build and browser verification.

## Mobile Menu Click Handler Repair

- [x] Update mobile navigation items in `ResponsiveLayout.tsx` to use explicit `navigate(path)` onClick handlers with immediate state updates.
- [x] Run build and browser verification.

## Server Integration & `npm run dev` Normalization

- [x] Update `server/index.ts` with the provided code snippet (cleaned of stray trailing quotes).
- [x] Update `package.json` scripts so `npm run dev` runs the unified development server.
- [x] Run build and browser verification.

## React/Vite-Only Restoration

- [x] Remove `server/` directory and `dist/index.js`.
- [x] Restore `package.json` scripts to pure Vite dev and build commands.
- [x] Run build and browser verification.
