import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";
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
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
