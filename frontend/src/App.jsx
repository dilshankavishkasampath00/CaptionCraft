import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    </Router>
  );
}

export default App;
