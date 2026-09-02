import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Shield, Zap, Github, Chrome, User, Check, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    useCase: '',
    teamSize: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    { id: 1, title: 'Account Setup', description: 'Create your Assesium account' },
    { id: 2, title: 'Personalization', description: 'Tell us about yourself' },
    { id: 3, title: 'Welcome', description: 'You\'re all set!' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Access your notes instantly across all devices'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'End-to-end encryption keeps your thoughts safe'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Smart suggestions that understand your context'
    }
  ];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate account creation process
    setTimeout(() => {
      setIsLoading(false);
      if (currentStep < steps.length) {
        handleNextStep();
      }
    }, 2000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="pl-10 focus:ring-2 focus:ring-violet-400/50"
                    style={{
                      backgroundColor: 'var(--button-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="pl-10 focus:ring-2 focus:ring-violet-400/50"
                    style={{
                      backgroundColor: 'var(--button-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="pl-10 focus:ring-2 focus:ring-violet-400/50"
                  style={{
                    backgroundColor: 'var(--button-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                <Input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a strong password"
                  className="pl-10 pr-10 focus:ring-2 focus:ring-violet-400/50"
                  style={{
                    backgroundColor: 'var(--button-secondary)',
        // <div className="gradient-bg"></div>

                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                <Input
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="pl-10 pr-10 focus:ring-2 focus:ring-violet-400/50"
                  style={{
                    backgroundColor: 'var(--button-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>By creating an account, you agree to our Terms of Service and Privacy Policy</span>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 text-lg font-semibold"
            >
              {isLoading ? (
                <div className="flex items-center">
                
                  
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        );

      case 2:
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                What's your primary use case?
              </label>
              <select
                name="useCase"
                value={formData.useCase}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                style={{
                  backgroundColor: 'var(--button-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                  border: '1px solid'
                }}
                required
              >
                <option value="">Select your use case</option>
                <option value="personal">Personal note-taking</option>
                <option value="research">Research & academia</option>
                <option value="business">Business & productivity</option>
                <option value="creative">Creative writing</option>
                <option value="education">Education & learning</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                Team size (optional)
              </label>
              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                style={{
                  backgroundColor: 'var(--button-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                  border: '1px solid'
                }}
              >
                <option value="">Select team size</option>
                <option value="individual">Just me</option>
                <option value="small">2-10 people</option>
                <option value="medium">11-50 people</option>
                <option value="large">50+ people</option>
              </select>
            </div>

            <div className="rounded-2xl p-6 border" style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)'
            }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>What you'll get:</h3>
              <div className="space-y-3">
                {[
                  'Unlimited notes and documents',
                  'AI-powered writing assistance',
                  'Cross-platform synchronization',
                  'Advanced search capabilities',
                  'Collaboration tools',
                  'Priority customer support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 text-lg font-semibold"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Setting up...
                </div>
              ) : (
                <>
                  Complete Setup
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        );

      case 3:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Welcome to Assesium!</h2>
            <p className="text-lg max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Your account has been created successfully. You're ready to start marking exams and tracking student performance.
            </p>

            <div className="rounded-2xl p-6 border max-w-md mx-auto" style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)'
            }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Next Steps:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span style={{ color: 'var(--text-secondary)' }}>Download the mobile app</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span style={{ color: 'var(--text-secondary)' }}>Upload your first exam</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span style={{ color: 'var(--text-secondary)' }}>Explore AI marking features</span>
                </div>
              </div>
            </div>

            <Button 
                  className="btn-primary px-8 py-3 text-lg"
                  onClick={() => window.location.href = '/dashboard' }
                  >
                    Launch Assesium
                  <ArrowRight className="w-5 h-5 ml-2" />
            </Button>


          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row dark-mode-split">

      {/* Left Side - Signup Form */}
      <div className="form-side w-full md:w-1/2">

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            {/* <div className="text-center mb-8"> */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/assesium-logo.png" alt="Assesium Logo" className="h-12" />
            </div>
            
          
            
            <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              {currentStep === 1 && "Create your account"}
              {currentStep === 2 && "Tell us about yourself"}
              {currentStep === 3 && "Welcome to Assesium!"}
            </h1>
            <p style={{ color: 'var(--text-muted)' }}>
              {currentStep === 1 && "Join thousands of users who trust Assesium with their ideas"}
              {currentStep === 2 && "Help us personalize your Assesium experience"}
              {currentStep === 3 && "You're all set to start your journey"}
            </p>
          </div>

          {/* Progress Steps */}
          {currentStep < 3 && (
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.id 
                      ? 'bg-violet-500 text-white' 
                      : 'text-zinc-400'
                  }`} style={{
                    backgroundColor: currentStep >= step.id ? '#8b5cf6' : 'var(--button-secondary)'
                  }}>
                    {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-2 ${
                      currentStep > step.id ? 'bg-violet-500' : ''
                    }`} style={{
                      backgroundColor: currentStep > step.id ? '#8b5cf6' : 'var(--border-color)'
                    }} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Social Login (only on step 1) */}
          {currentStep === 1 && (
            <>
              <div className="space-y-3 mb-6">
                <Button
                  variant="outline"
                  className="w-full btn-secondary"
                >
                  <Chrome className="w-4 h-4 mr-2" />
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full btn-secondary"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Continue with GitHub
                </Button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" style={{ borderColor: 'var(--border-color)' }}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2" style={{ 
                    backgroundColor: 'var(--bg-primary)', 
                    color: 'var(--text-muted)' 
                  }}>Or continue with email</span>
                </div>
              </div>
            </>
          )}

          {/* Step Content */}
          {renderStepContent()}

          {/* Navigation Buttons (only for steps 1-2) */}
          {currentStep < 3 && currentStep > 1 && (
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevStep}
                className="btn-secondary"
              >
                Previous
              </Button>
            </div>
          )}

          {/* Sign In Link */}
          {currentStep === 1 && (
            <div className="text-center mt-6">
              <p style={{ color: 'var(--text-muted)' }}>
                Already have an account?{' '}
                <Link to="/login" className="text-violet-400 hover:text-violet-300 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          )}

          {/* Security Notice */}
          {currentStep === 1 && (
            <div className="mt-8 p-4 rounded-lg border" style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)'
            }}>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Secure Signup</span>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Your account is protected with enterprise-grade security and end-to-end encryption.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Features & Branding */}
      <div className="glass-side hidden md:flex w-full md:w-1/2">

        <div className="relative z-10 flex flex-col justify-center p-12 max-w-lg mx-auto">
        <div className="gradient-bg"></div>
          
          {/* Header */}
          <div className="mb-12">
        <div className="gradient-bg"></div>

            <Badge variant="outline" className="mb-4 px-3 py-1 text-violet-400 border-violet-400/20 bg-violet-400/10">
              <Sparkles className="w-3 h-3 mr-1" />
              Join 50,000+ users
            </Badge>
            
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Transform your assessment experience
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Join thousands of educators, institutions, and parents who have revolutionized their exam marking with Assesium's AI-powered platform.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
        <div className="gradient-bg"></div>

            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
        <div className="gradient-bg"></div>

                <div>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 rounded-2xl border backdrop-blur" style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
          }}>
        <div className="gradient-bg"></div>

            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-600 text-yellow-600" />
              ))}
            </div>
            <p className="mb-4 italic" style={{ color: 'var(--text-secondary)' }}>
              "Assesium has completely transformed how I mark and evaluate student assessments. The AI marking is incredibly accurate, and the performance analytics help me track student progress effectively."
            </p>
            <div className="flex items-center gap-3">
        <div className="gradient-bg"></div>
              
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">DR</span>
              </div>
        <div className="gradient-bg"></div>
              
              <div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Prof. Rachel Kim</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Education Department, MIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

