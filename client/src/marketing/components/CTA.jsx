import React from 'react';
import { ArrowRight, CreditCard } from 'lucide-react';

const CTA = () => {
  return (
    <section className="assesium-cta relative z-10 w-full min-w-0">
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8 md:pb-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-900/40 p-8 text-center backdrop-blur">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Revolutionize Your Assessment Process Today' your exam marking today</h2>
          <p className="mt-2 text-zinc-300">Experience the future of AI-powered exam marking. Start your free trial today!</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5"
            >
              Compare plans
              <CreditCard className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

