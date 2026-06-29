import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";
import AdPlacement from "./components/AdPlacement";
import Home from "./pages/Home";
import BioGenerator from "./pages/BioGenerator";
import HashtagGenerator from "./pages/HashtagGenerator";
import Settings from "./pages/Settings";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Helmet>
          <title>CaptionCraft AI - Social Media Caption & Bio Generator</title>
          <meta name="description" content="Generate catchy, engaging Instagram and TikTok captions, bios, and hashtags instantly with CaptionCraft AI." />
          <meta name="keywords" content="Instagram captions, TikTok bio, hashtag generator, AI captions, social media tools" />
        </Helmet>
        <TopNavBar />
        <div className="flex-grow">
          <div className="relative">
            <div className="hidden xl:block fixed left-4 top-24 z-30 w-[160px]">
              <div className="sticky top-24">
                <AdPlacement containerId="ad-slot-160x600" label="Left Sidebar" size="160 × 600" className="h-[600px] w-[160px]" />
              </div>
            </div>
            <div className="hidden xl:block fixed right-4 top-24 z-30 w-[160px]">
              <div className="sticky top-24">
                <AdPlacement containerId="ad-slot-160x300" label="Right Sidebar" size="160 × 300" className="h-[300px] w-[160px]" />
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:pl-[190px] xl:pr-[190px]">
              <div className="mx-auto mb-6 flex justify-center pt-4">
                <AdPlacement containerId="ad-slot-728x90" label="Sticky Top Banner" size="728 × 90" className="sticky top-20 h-[90px] w-full max-w-[728px]" />
              </div>

              <div className="pb-24">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/bio" element={<BioGenerator />} />
                  <Route path="/hashtags" element={<HashtagGenerator />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                </Routes>
              </div>

              <div className="mx-auto mt-6 flex justify-center pb-8">
                <AdPlacement containerId="ad-slot-468x60" label="Sticky Bottom Banner" size="468 × 60" className="sticky bottom-4 h-[60px] w-full max-w-[468px]" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
