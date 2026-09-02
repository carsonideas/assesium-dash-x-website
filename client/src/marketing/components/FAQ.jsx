import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  return (
    <section className="assesium-faq relative z-10 w-full min-w-0 bg-[#0A0A11]">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold text-white tracking-tight">Your Questions, Answered</h3>
          <p className="mt-2 text-zinc-400 text-sm">Everything you need to know about grading with AI.</p>
        </div>

        <div className="divide-y divide-white/5 rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
          <details className="group open:bg-white/5 p-5" open>
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="min-w-0 flex-1 text-white text-sm sm:text-base font-medium">How does Assesium ensure data privacy and security for student information?</span>
              <span className="rounded-md bg-white/5 ring-1 ring-white/10 p-1.5 text-slate-300 group-open:rotate-180 transition">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">
              Assesium employs robust encryption protocols and adheres to strict data protection regulations to safeguard all student and institutional data. Our platform is designed with privacy by design principles.
            </p>
          </details>

          <details className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="min-w-0 flex-1 text-white text-sm sm:text-base font-medium">Can Assesium mark handwritten exams and documents?</span>
              <span className="rounded-md bg-white/5 ring-1 ring-white/10 p-1.5 text-slate-300 group-open:rotate-180 transition">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">
              Yes, Assesium utilizes advanced AI and OCR technology to accurately mark handwritten exams, documents, and assignments, providing detailed feedback and analysis.
            </p>
          </details>

          <details className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="min-w-0 flex-1 text-white text-sm sm:text-base font-medium">How does Assesium support teachers, parents, and institutions?</span>
              <span className="rounded-md bg-white/5 ring-1 ring-white/10 p-1.5 text-slate-300 group-open:rotate-180 transition">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">
              Assesium provides comprehensive reports on student, teacher, and institutional performance, a tutoring section, community forums, scheduling tools, and a revision question generator. Parents can track student progress in real-time, and all payment methods are accepted.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

