import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="assesium-final-cta relative mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-violet-400/30 dark:border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-indigo-600/10 dark:from-violet-500/10 dark:to-indigo-600/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Ready to Transform Your Assessment Workflow?</h3>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Join thousands of educators and institutions already benefiting from Assesium.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-white px-4 py-2 text-sm font-medium">
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-white/10">
              Book a demo
              <Play className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

