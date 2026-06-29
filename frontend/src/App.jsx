import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
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
          <div className="px-6 py-6 flex justify-center">
            <div id="container-06c285826fc9d72d9805a56411d42054" className="w-full max-w-4xl min-h-[120px] rounded-xl border border-white/10 bg-white/5" />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
