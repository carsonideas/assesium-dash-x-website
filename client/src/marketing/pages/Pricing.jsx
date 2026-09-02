import React, { useState } from 'react';
import { Check, CreditCard, Sparkles, Users, Building, Zap, Shield, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);
  const [teamSize, setTeamSize] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [currentTools, setCurrentTools] = useState(150);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const calculateROI = () => {
    const timeSavedPerWeek = Math.min(teamSize * 0.15, 10);
    const monthlySavings = timeSavedPerWeek * 4 * hourlyRate - currentTools;
    const annualROI = ((monthlySavings * 12) / (currentTools * 12)) * 100;
    const paybackDays = currentTools / (monthlySavings / 30);

    return {
      timeSaved: `${timeSavedPerWeek.toFixed(1)} hours`,
      monthlySavings: `$${Math.max(monthlySavings, 0).toLocaleString()}`,
      annualROI: `${Math.max(annualROI, 0).toFixed(0)}%`,
      paybackPeriod: `${Math.max(paybackDays, 0.1).toFixed(1)} days`
    };
  };

  const roi = calculateROI();

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      price: { monthly: 0, yearly: 0 },
      features: [
        'Up to 1,000 notes',
        'Basic AI suggestions',
        'Cross-platform sync',
        'End-to-end encryption',
        'Basic search',
        'Mobile apps'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      description: 'For power users and professionals',
      price: { monthly: 12, yearly: 10 },
      features: [
        'Unlimited notes',
        'Advanced AI features',
        'Smart backlinks',
        'Advanced search',
        'Voice notes',
        'Export options',
        'Priority support',
        'Custom themes'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Team',
      description: 'For small teams and collaborations',
      price: { monthly: 25, yearly: 20 },
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Shared workspaces',
        'Admin controls',
        'Team analytics',
        'Advanced integrations',
        'SSO support',
        'Dedicated support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: { monthly: 'Custom', yearly: 'Custom' },
      features: [
        'Everything in Team',
        'Custom deployment',
        'Advanced security',
        'Compliance tools',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'Training & onboarding'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="pricing-route min-h-screen">
      {/* Hero Section */}
      <section className="relative z-10 hero-section pt-0 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg"></div>
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                <CreditCard className="h-3.5 w-3.5 text-violet-300" />
                Simple Pricing
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Choose your<br/>
              <span className="text-violet-400">perfect plan</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 mb-8">
              Start free and scale as you grow. All plans include our core features with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-sm text-zinc-300">Monthly</span>
              <button
                type="button"
                aria-pressed={isYearly}
                aria-label={`Switch to ${isYearly ? 'monthly' : 'yearly'} billing`}
                className={`pricing-billing-toggle relative w-14 h-7 bg-zinc-700 rounded-full p-1 transition-colors duration-300 ${isYearly ? 'bg-violet-600' : ''}`}
                onClick={toggleBilling}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-7' : ''}`}></div>
              </button>
              <span className="text-sm text-zinc-300">Yearly</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-400">
                <Sparkles className="w-3 h-3" />
                Save 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards-section relative z-10 pb-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`pricing-plan-card relative p-6 rounded-2xl backdrop-blur transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  plan.popular 
                    ? 'pricing-plan-card-popular bg-gradient-to-br from-violet-500/10 to-indigo-600/10 ring-1 ring-violet-500/30'
                    : 'pricing-plan-card-standard bg-white/5 ring-1 ring-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 border-popular">
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white from-violet-500 to-indigo-600">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-400">{plan.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {typeof plan.price.monthly === 'number' 
                        ? `$${isYearly ? plan.price.yearly : plan.price.monthly}`
                        : plan.price.monthly
                      }
                    </span>
                    {typeof plan.price.monthly === 'number' && (
                      <span className="text-zinc-400 text-sm">/month</span>
                    )}
                  </div>
                  {typeof plan.price.monthly === 'number' && (
                    <p className="text-xs text-zinc-500 mt-1">
                      {isYearly ? 'Billed yearly' : 'Billed monthly'}
                    </p>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  type="button"
                  onClick={() => navigate(plan.name === 'Enterprise' ? '/contact' : '/get-started')}
                  className={`pricing-plan-button w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white'
                      : 'border border-zinc-600 text-zinc-300 hover:bg-zinc-700 bg-transparent'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="pricing-roi-section relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              See how much time and money Assesium can save your team with our interactive ROI calculator.
            </p>
          </div>

          <div className="pricing-roi-panel bg-white/5 ring-1 ring-white/10 rounded-3xl p-8 backdrop-blur">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Team Size
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-zinc-400 mt-1">
                    <span>1</span>
                    <span className="text-white font-medium">{teamSize} people</span>
                    <span>100</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Average Hourly Rate ($)
                  </label>
                  <input
                    type="range"
                    min="25"
                    max="200"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-zinc-400 mt-1">
                    <span>$25</span>
                    <span className="text-white font-medium">${hourlyRate}/hour</span>
                    <span>$200</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Current Tool Costs ($/month)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={currentTools}
                    onChange={(e) => setCurrentTools(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-zinc-400 mt-1">
                    <span>$0</span>
                    <span className="text-white font-medium">${currentTools}/month</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="pricing-roi-result bg-white/5 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">{roi.timeSaved}</div>
                    <div className="text-sm text-zinc-400">Time Saved/Week</div>
                  </div>
                  <div className="pricing-roi-result bg-white/5 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{roi.monthlySavings}</div>
                    <div className="text-sm text-zinc-400">Monthly Savings</div>
                  </div>
                  <div className="pricing-roi-result bg-white/5 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-violet-400 mb-1">{roi.annualROI}</div>
                    <div className="text-sm text-zinc-400">Annual ROI</div>
                  </div>
                  <div className="pricing-roi-result bg-white/5 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-1">{roi.paybackPeriod}</div>
                    <div className="text-sm text-zinc-400">Payback Period</div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    type="button"
                    onClick={() => navigate('/get-started')}
                    className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white"
                  >
                    Start Your Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq-section relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400">
              Everything you need to know about Assesium pricing and plans.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Can I change plans at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "What happens to my data if I cancel?",
                answer: "Your data remains accessible for 30 days after cancellation. You can export all your notes during this period."
              },
              {
                question: "Do you offer discounts for students or nonprofits?",
                answer: "Yes, we offer 50% discounts for students and qualified nonprofit organizations. Contact us for more details."
              },
              {
                question: "Is my data secure?",
                answer: "Absolutely. We use end-to-end encryption and zero-knowledge architecture. We can't read your notes even if we wanted to."
              }
            ].map((faq, index) => (
              <div key={index} className="pricing-faq-item bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-zinc-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta-section relative z-10 py-20">
        <div className="pricing-cta-panel max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
            Ready to get started?
          </h2>
          <p className="text-zinc-300 text-lg mb-8">
            Join thousands of users who have transformed their note-taking with Assesium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="button"
              onClick={() => navigate('/get-started')}
              className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white px-8 py-3"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-zinc-600 text-zinc-300 hover:bg-zinc-700 px-8 py-3"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
