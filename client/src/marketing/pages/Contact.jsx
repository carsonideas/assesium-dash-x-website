import { motion as Motion } from 'framer-motion'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Globe,
  Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      city: "San Francisco",
      address: "123 Education Plaza, Suite 400",
      zipCode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      timezone: "PST (UTC-8)"
    },
    {
      city: "New York",
      address: "456 Education Avenue, Floor 15",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 987-6543",
      timezone: "EST (UTC-5)"
    },
    {
      city: "London",
      address: "789 Learning Street, Level 8",
      zipCode: "London, UK EC1A 1BB",
      phone: "+44 20 7123 4567",
      timezone: "GMT (UTC+0)"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="contact-route min-h-screen">
      {/* Hero Section - Choose Your Preferred Method */}
      <section className="relative z-10 hero-section">
        <div className="gradient-bg"></div>
        <div className="glass-overlay"></div>
        
        <div className="relative max-w-6xl sm:px-6 lg:px-8 sm:pt-16 mt-0 mr-auto mb-0 ml-auto pt-0 pr-0 pl-0 hero-content">
          <div className="flex flex-col text-center mr-auto mb-30 ml-auto space-y-6 items-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                <Headphones className="h-3.5 w-3.5 text-violet-300" />
                Get in Touch
              </span>
            </div>

            <h1 className="sm:text-6xl md:text-7xl text-4xl font-semibold text-white tracking-tight">
              Choose Your<br />
              <span className="text-violet-400">Preferred Method</span>
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              We offer multiple ways to get in touch. Choose the method that works best for you.
            </p>
          </div>
        </div>
      </section>

      {/* Content Wrapper with Continuous Background */}
      <div className="page-content-wrapper">
        {/* Contact Form & Offices */}
        <section className="contact-workspace section-spacing content-section px-8 pt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="contact-form-panel bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                  
                  {isSubmitted ? (
                    <Motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                      <p className="text-zinc-400">We'll get back to you within 24 hours.</p>
                    </Motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-2">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                            className="w-full bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-2">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            required
                            className="w-full bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-2">
                            Company/Institution
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Acme University"
                            className="w-full bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-2">
                            Your Role
                          </label>
                          <Select value={formData.role} onValueChange={(value) => handleSelectChange('role', value)}>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white">
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="educator">Educator</SelectItem>
                              <SelectItem value="administrator">Administrator</SelectItem>
                              <SelectItem value="it-manager">IT Manager</SelectItem>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                          Subject *
                        </label>
                        <Select value={formData.subject} onValueChange={(value) => handleSelectChange('subject', value)}>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white">
                            <SelectValue placeholder="What can we help you with?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="demo">Request Demo</SelectItem>
                            <SelectItem value="pricing">Pricing Questions</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about how we can help you..."
                          rows={5}
                          required
                          className="w-full bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  )}
                </div>
              </Motion.div>

              {/* Office Locations */}
              <Motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="contact-offices space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Our Offices</h3>
                    <p className="text-zinc-300 mb-8">
                      Visit us at one of our global offices or reach out to our local teams.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="contact-office-card bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-2">{office.city}</h4>
                            <div className="space-y-1 text-sm text-zinc-400">
                              <p>{office.address}</p>
                              <p>{office.zipCode}</p>
                              <p className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                {office.phone}
                              </p>
                              <p className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {office.timezone}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta-section section-spacing-lg px-8 flex justify-center pt-20">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-cta-panel max-w-4xl w-full mx-auto text-center rounded-3xl p-10 bg-gradient-to-br from-violet-500/10 to-indigo-600/10 shadow-xl ring-1 ring-zinc-200/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Assessment Process?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait to revolutionize your exam marking and educational management. Start your free trial today 
              and experience the power of AI-driven assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                type="button"
                size="lg"
                onClick={() => navigate('/get-started')}
                className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => {
                  handleSelectChange('subject', 'demo');
                  document.querySelector('.contact-form-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="border-violet-400/30 text-violet-300 hover:bg-violet-500/10 px-8 py-4 rounded-full text-lg font-semibold"
              >
                Schedule Demo
              </Button>
            </div>
          </Motion.div>
        </section>
      </div>

      

    </div>
  );
};

export default Contact;
