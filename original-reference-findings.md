# Original Assesium behavior reference

Source repository: https://github.com/carsonideas/Assesium-V.1.0.0

Original Dashboard source: https://raw.githubusercontent.com/carsonideas/Assesium-V.1.0.0/master/src/pages/Dashboard.tsx

Original Real-time Marking source: https://raw.githubusercontent.com/carsonideas/Assesium-V.1.0.0/master/src/pages/RealtimeMarking.tsx

Original Real-time Marking stylesheet: https://raw.githubusercontent.com/carsonideas/Assesium-V.1.0.0/master/src/App.css

Key original Dashboard behavior observed in the extracted source:

The four metric cards are clickable destinations. Total Students navigates to `/students`; Institutions navigates to `/institutions`; Exams Processed navigates to `/ai-processing`; and Avg. Processing Time navigates to `/reports`. The cards use animated CountUp values. The original Dashboard maintains live state for totalStudents, totalInstitutions, and examsProcessed, incrementing them on a timed interval.

Performance Trends has a `timeRange` select with `Last 7 Days`, `Last 30 Days`, and `Last 90 Days`. Subject Distribution has a `selectedInstitution` select with `All Institutions` plus institution names from the institutions data. The same institution selector and a search field are used in Recent Exam Results, with a Filter control.

The original Recent Exam Results table contains clickable student rows navigating to `/students/:id`, plus status badges and an Actions column. The extracted source confirms the table is designed around working row/detail navigation and action controls; the remaining source should be retrieved locally for the exact eye/download button markup before implementation.

The original Real-time Marking source does not contain a route-local theme store or independent Light/Dark state; its base root is a fixed light gradient. The current implementation needs an independent persisted route theme so global website dark mode can coexist with Real-time Marking light mode, and vice versa.
