import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
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
  useEffect(() => {
    const adScripts = [
      {
        id: "ad-160x300",
        inline: `atOptions = { key: 'f74888836cb3ed5a9237beb4a52972cc', format: 'iframe', height: 300, width: 160, params: {} };`,
        src: "https://www.highperformanceformat.com/f74888836cb3ed5a9237beb4a52972cc/invoke.js"
      },
      {
        id: "ad-160x600",
        inline: `atOptions = { key: '9e39b0b1eb48a214ed3f85cb0d4dceab', format: 'iframe', height: 600, width: 160, params: {} };`,
        src: "https://www.highperformanceformat.com/9e39b0b1eb48a214ed3f85cb0d4dceab/invoke.js"
      },
      {
        id: "ad-300x250",
        inline: `atOptions = { key: '69f318aa55b5983fc0c5fb3827a01167', format: 'iframe', height: 250, width: 300, params: {} };`,
        src: "https://www.highperformanceformat.com/69f318aa55b5983fc0c5fb3827a01167/invoke.js"
      },
      {
        id: "ad-320x50",
        inline: `atOptions = { key: 'ea3890a3d0ae43f3b5eb226d2e643043', format: 'iframe', height: 50, width: 320, params: {} };`,
        src: "https://www.highperformanceformat.com/ea3890a3d0ae43f3b5eb226d2e643043/invoke.js"
      },
      {
        id: "ad-468x60",
        inline: `atOptions = { key: 'df7f42f6964823b7a22e12ef123106af', format: 'iframe', height: 60, width: 468, params: {} };`,
        src: "https://www.highperformanceformat.com/df7f42f6964823b7a22e12ef123106af/invoke.js"
      },
      {
        id: "ad-728x90",
        inline: `atOptions = { key: 'a9dfce01c9b314b44c3d7b63f20f2df0', format: 'iframe', height: 90, width: 728, params: {} };`,
        src: "https://www.highperformanceformat.com/a9dfce01c9b314b44c3d7b63f20f2df0/invoke.js"
      },
      {
        id: "ad-native-banner",
        src: "https://pl30123101.effectivecpmnetwork.com/06c285826fc9d72d9805a56411d42054/invoke.js",
        attrs: { async: "async", "data-cfasync": "false" }
      },
      {
        id: "ad-popunder",
        src: "https://pl30123102.effectivecpmnetwork.com/a6/6f/3d/a66f3de52bfeec86412ed5444742fb72.js"
      },
      {
        id: "ad-socialbar",
        src: "https://pl30123103.effectivecpmnetwork.com/c5/99/b4/c599b4d1baa3d1e1e1cb52ccd0f6a8ac.js"
      }
    ];

    adScripts.forEach(({ id, inline, src, attrs }) => {
      if (document.getElementById(id)) return;

      if (inline) {
        const inlineScript = document.createElement("script");
        inlineScript.textContent = inline;
        inlineScript.id = `${id}-config`;
        document.head.appendChild(inlineScript);
      }

      const script = document.createElement("script");
      script.src = src;
      script.id = id;
      script.async = true;
      script.defer = true;
      if (attrs) {
        Object.entries(attrs).forEach(([key, value]) => {
          script.setAttribute(key, value);
        });
      }
      document.head.appendChild(script);
    });

    return () => {
      adScripts.forEach(({ id }) => {
        const node = document.getElementById(id);
        if (node) node.remove();
        const configNode = document.getElementById(`${id}-config`);
        if (configNode) configNode.remove();
      });
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Hidden ad containers for ad provider scripts */}
        <div id="ad-160x300" style={{ display: 'none' }} />
        <div id="ad-160x600" style={{ display: 'none' }} />
        <div id="ad-300x250" style={{ display: 'none' }} />
        <div id="ad-320x50" style={{ display: 'none' }} />
        <div id="ad-468x60" style={{ display: 'none' }} />
        <div id="ad-728x90" style={{ display: 'none' }} />
        <div id="ad-native-banner" style={{ display: 'none' }} />
        <div id="ad-popunder" style={{ display: 'none' }} />
        <div id="ad-socialbar" style={{ display: 'none' }} />
        
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
