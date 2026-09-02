import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

const BackgroundGlow = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden">
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(138,92,246,0.55),rgba(18,18,27,0))]"></div>
    <div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(99,102,241,0.45),rgba(18,18,27,0))]"></div>
  </div>
);

export default function MarketingApp() {
  return (
    <div className="marketing-app antialiased text-zinc-100 bg-[#0a0a12] min-h-screen" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial' }}>
      <BackgroundGlow />
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="get-started" element={<GetStarted />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}
