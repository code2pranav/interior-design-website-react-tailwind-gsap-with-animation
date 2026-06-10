import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import ShopDetails from './pages/ShopDetails';
import ScrollToTop from './components/ui/ScrollToTop';
import TeamDetails from './pages/TeamDetails';
import Team from './pages/Team';
import About from './pages/About';
import GalleryDetails from './pages/GalleryDetails';
import Faqs from './pages/Faqs';
import Services from './pages/Services';
import WorkDetails from './pages/WorkDetails';
import ServiceDetails from './pages/ServiceDetails';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Page404 from './pages/Page404';
import Shop from './pages/Shop';

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function AppInner() {
  const smootherRef = useRef(null);
  const location = useLocation();

  // Re-create ScrollSmoother on every route change (desktop only).
  // We must recreate it each time because navigating away unmounts/remounts
  // the smooth-content children, so the old instance's DOM references are stale.
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    // Kill stale smoother from previous route
    if (smootherRef.current) {
      smootherRef.current.kill();
      smootherRef.current = null;
    }

    // Scroll to top immediately (before smoother init so position is clean)
    window.scrollTo(0, 0);

    if (isDesktop) {
      // Small tick so the new route's DOM is fully painted
      const initTimer = setTimeout(() => {
        smootherRef.current = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.5,
          effects: true,
          normalizeScroll: true,
        });

        // Refresh after smoother is ready so section ScrollTriggers recalculate
        ScrollTrigger.refresh(true);
      }, 50);

      return () => {
        clearTimeout(initTimer);
        if (smootherRef.current) {
          smootherRef.current.kill();
          smootherRef.current = null;
        }
      };
    }

    // Mobile: just refresh ScrollTrigger positions after route paint
    const t = setTimeout(() => ScrollTrigger.refresh(true), 100);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <div className="min-h-screen overflow-clip">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<ShopDetails />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team/:id" element={<TeamDetails />} />
              <Route path="/gallery/:id" element={<GalleryDetails />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service/:id" element={<ServiceDetails />} />
              <Route path="/work/:id" element={<WorkDetails />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/page404" element={<Page404 />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Toaster position="top-right" />
    </>
  );
}

function App() {
  return <AppInner />;
}

export default App;
