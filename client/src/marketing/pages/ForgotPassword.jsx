import { useState } from 'react';
import { ArrowLeft, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl items-center px-6 py-16">
      <section className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        <Link to="/login" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-300">
          <Mail className="h-6 w-6" />
        </div>
        <h1 className="text-3xl font-semibold text-white">Reset your password</h1>
        <p className="mt-3 text-zinc-400">Enter your email and we’ll send instructions to reset your account password.</p>
        {submitted ? (
          <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200">
            If an account exists for that email, reset instructions are on their way.
          </div>
        ) : (
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-8 space-y-5">
            <Input type="email" required placeholder="you@example.com" className="border-white/10 bg-white/5 text-white placeholder:text-zinc-500" />
            <Button type="submit" className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white">
              Send reset instructions
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}
      </section>
    </main>
  );
}
