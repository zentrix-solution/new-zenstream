import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/isp/Navbar';
import { Footer } from '@/components/isp/FooterNew';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Plans from '@/pages/Plans';
import Support from '@/pages/Support';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import Terms from '@/pages/legal/Terms';
import Privacy from '@/pages/legal/Privacy';
import Refund from '@/pages/legal/Refund';
import UsagePolicy from '@/pages/legal/UsagePolicy';
import Cookies from '@/pages/legal/Cookies';
import Billing from '@/pages/legal/Billing';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/usage-policy" element={<UsagePolicy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}