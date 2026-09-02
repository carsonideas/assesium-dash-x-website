
import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from './../firebase';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Shield, Zap, Github, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Login = () => {

  const handleSocialLogin = async (provider) => {
    if (!auth) {
      alert('Authentication is not configured for this preview. Add the VITE_FIREBASE_* variables to enable social sign-in.');
      return;
    }
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      // The user is signed in.
      console.log('User signed in:', result.user);
      // Redirect to the specified URL
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Social login error:', error.message);
      // Handle Errors here.
      alert('Login failed: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

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

  return (
    <div className="min-h-screen flex dark-mode-split">
      {/* Left Side - Login Form */}
      <div className="form-side w-full md:w-1/2">
        <div className="w-full max-w-md">
          {/* Header */}

           <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/assesium-logo.png" alt="Assesium Logo" className="h-12" />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-zinc-400">Sign in to continue to your account</p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <Button
              variant="outline"
              className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10"
              onClick={() => handleSocialLogin(googleProvider)}
            >
              <Chrome className="w-4 h-4 mr-2" />
              Continue with Google
            </Button>
            <Button
              variant="outline"
              className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10"
              onClick={() => handleSocialLogin(githubProvider)}
            >
              <Github className="w-4 h-4 mr-2" />
              Continue with GitHub
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0a0a12] text-zinc-400">Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
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
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-violet-400/50"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                <Input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="pl-10 pr-10 bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-violet-400/50"
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-violet-600 bg-white/5 border-white/10 rounded focus:ring-violet-400/50"
                />
                <span className="ml-2 text-sm text-zinc-300">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-violet-400 hover:text-violet-300">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white py-3 text-lg font-semibold"
            
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-zinc-400">
              Don't have an account?{' '}
              <Link to="/get-started" className="text-violet-400 hover:text-violet-300 font-medium">
                Sign up for free
              </Link>
            </p>
          </div>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-white">Secure Login</span>
            </div>
            <p className="text-xs text-zinc-400">
              Your login is protected with enterprise-grade security and end-to-end encryption.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Features & Branding */}
      <div className="glass-side hidden md:flex w-1/2">

        <div className="relative z-10 flex flex-col justify-center p-12 max-w-lg mx-auto">
          {/* Header */}
          <div className="gradient-bg"></div>
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-violet-400 border-violet-400/20 bg-violet-400/10">
              <Sparkles className="w-3 h-3 mr-1" />
              Trusted by 50,000+ users
            </Badge>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Your assessments deserve the best platform
            </h2>
            <p className="text-zinc-3000 text-lg leading-relaxed">
              Join thousands of educators, institutions, and parents who have transformed their exam marking with Assesium's AI-powered platform.
            </p>
          </div>

          {/* Features */}
          
          <div className="space-y-6">
            
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="gradient-bg"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div className="gradient-bg"></div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-zinc-9400">{feature.description}</p>
                
                </div>
             <div className="gradient-bg"></div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur">
            <div className="gradient-bg"></div>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-600 text-yellow-600"></Star>
              ))}
            </div>

            
                        
            <p className="text-zinc-1900 mb-4 italic">
              "Assesium has completely transformed how I mark and evaluate student assessments. The AI marking is incredibly accurate, and the performance analytics help me track student progress effectively."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">DR</span>
              </div>
              
              <div>
                <p className="text-black font-medium">Prof. Rachel Kim</p>
                <p className="text-zinc-9900 text-sm">Education Department, MIT</p>
              </div>
            <div className="gradient-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

