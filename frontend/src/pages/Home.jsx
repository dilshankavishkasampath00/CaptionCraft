import { useState } from "react";
import { Helmet } from "react-helmet-async";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log("Debug - API Key Loaded:", API_KEY ? "Present" : "UNDEFINED");

export default function Home() {
  const [topic, setTopic] = useState("");
  const [mood, setMood] = useState("Funny & Witty");
  const [platform, setPlatform] = useState("Instagram");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic!");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const prompt = `Generate social media captions for ${platform}. 
Topic: ${topic}
Mood/Vibe: ${mood}

Please provide 4 distinct variations that are highly engaging and include emojis.
Also provide a list of 10-15 highly relevant and trending hashtags based on the topic and platform.
Return exactly this format as raw JSON without markdown format blocks around it:
{
  "captions": ["caption 1 goes here", "caption 2 goes here", "caption 3 goes here", "caption 4 goes here"],
  "hashtags": ["#hashtag1", "#hashtag2", "#hashtag3"]
}
`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            response_mime_type: "application/json"
          }
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Failed to generate");

      let text = data.candidates[0].content.parts[0].text;
      
      // Strip markdown code block if present
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
         setResults(JSON.parse(jsonMatch[0]));
      } else {
         setResults(JSON.parse(text));
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const platformList = [
    { id: "Instagram", icon: "photo_camera" },
    { id: "TikTok", icon: "movie" },
    { id: "Threads", icon: "alternate_email" },
    { id: "LinkedIn", icon: "article" },
  ];

  return (
    <main className="relative kinetic-bg pt-10 min-h-screen">
      <Helmet>
        <title>Free AI Caption Generator - Instagram & TikTok | CaptionCraft</title>
        <meta name="description" content="Generate viral, highly engaging captions and hashtags for your Instagram and TikTok posts instantly using our free AI caption generator." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto overflow-hidden">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/15 mb-8">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-xs font-bold tracking-widest uppercase font-label text-on-surface-variant">Powered by Gemini 2.5 Flash</span>
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-on-surface leading-[1.1]">
          Generate Viral <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Captions</span> Instantly 🚀
        </h1>
        
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
          Unlock higher engagement with AI-powered captions crafted for your audience.
        </p>

        {/* Main Input Card */}
        <div className="w-full max-w-3xl glass-panel bg-surface-variant/60 border border-outline-variant/15 rounded-xl p-6 md:p-10 shadow-xl relative overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10">
            {/* Topic Input */}
            <div className="flex flex-col gap-2 text-left">
              <label className="font-label text-xs font-bold uppercase tracking-wider text-primary ml-1">What's your post about?</label>
              <div className="relative group">
                <input 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-surface-container border border-transparent rounded-DEFAULT px-5 py-4 focus:border-primary/40 focus:bg-surface-bright transition-all text-on-surface placeholder:text-outline" 
                  placeholder="e.g. solo travel to Japan" 
                  type="text" 
                />
              </div>
            </div>

            {/* Mood Selection */}
            <div className="flex flex-col gap-2 text-left">
              <label className="font-label text-xs font-bold uppercase tracking-wider text-primary ml-1">Vibe & Mood</label>
              <select 
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full bg-surface-container border border-transparent rounded-DEFAULT px-5 py-4 focus:border-primary/40 focus:bg-surface-bright transition-all text-on-surface appearance-none cursor-pointer">
                <option>Funny & Witty</option>
                <option>Sad & Deep</option>
                <option>Motivational</option>
                <option>Sarcastic</option>
                <option>Professional</option>
                <option>Aesthetic & Minimal</option>
              </select>
            </div>

            {/* Platform Selector */}
            <div className="flex flex-col gap-2 text-left md:col-span-2">
              <label className="font-label text-xs font-bold uppercase tracking-wider text-primary ml-1">Target Platform</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {platformList.map((p) => (
                  <button 
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={`flex items-center justify-center gap-2 py-3 border rounded-DEFAULT font-bold transition-all hover:scale-[1.02] active:scale-95 ${
                      platform === p.id 
                        ? "bg-primary/20 border-primary text-primary" 
                        : "bg-surface-container border-transparent text-on-surface-variant hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl" data-icon={p.icon}>{p.icon}</span>
                    <span>{p.id}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-error/20 text-error rounded-lg text-sm font-medium border border-error/30 text-left">
              {error}
            </div>
          )}

          {/* Generate Button */}
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-primary disabled:opacity-50 disabled:active:scale-100 text-on-primary font-headline font-semibold text-lg py-4 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-3 relative z-10 overflow-hidden group">
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative">{loading ? "Generating Magic..." : "Generate Magic"}</span>
            <span className={`material-symbols-outlined relative ${loading ? "animate-spin" : ""}`} data-icon={loading ? "hourglass_empty" : "auto_awesome"}>
              {loading ? "hourglass_empty" : "auto_awesome"}
            </span>
          </button>
        </div>
      </section>

      {/* Results Section */}
      {results && (
        <section className="px-6 max-w-5xl mx-auto pb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="font-headline text-3xl font-bold mb-8 text-on-surface text-center">Your Generated Captions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.captions.map((cap, i) => (
              <div key={`cap-${i}`} className="glass-panel p-6 rounded-xl border border-outline/10 hover:border-primary/50 transition-colors group relative">
                <p className="text-on-surface whitespace-pre-wrap leading-relaxed">{cap}</p>
                <button 
                  onClick={() => navigator.clipboard.writeText(cap)}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-surface p-2 rounded-lg hover:text-primary">
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                </button>
              </div>
            ))}
          </div>

          {results.hashtags && results.hashtags.length > 0 && (
            <div className="mt-10 pt-8 border-t border-outline/10 relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined pb-1">tag</span> Trending Hashtags
                </h3>
                <button 
                  onClick={() => navigator.clipboard.writeText(results.hashtags.join(" "))}
                  className="text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                >
                  Copy All
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {results.hashtags.map((tag, i) => (
                  <button 
                    key={`tag-${i}`} 
                    onClick={() => navigator.clipboard.writeText(tag)}
                    title="Click to copy"
                    className="px-4 py-2 bg-surface-container rounded-full text-sm font-medium text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-all border border-outline/5 hover:border-primary/30 active:scale-95"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant mt-4 italic flex items-center gap-1 opacity-70">
                <span className="material-symbols-outlined text-[14px]">info</span> Click individual hashtags to copy, or select 'Copy All'
              </p>
            </div>
          )}
        </section>
      )}

      {/* Bento Grid Feature Section */}
      <section className="px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Item 1 */}
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative border border-outline-variant/10">
            <div className="relative z-10">
              <h3 className="font-headline text-2xl font-bold mb-4">Engaging Storytelling</h3>
              <p className="text-on-surface-variant max-w-md">Our AI understands cultural nuances, delivering natural-sounding captions with perfect context and emoji integration.</p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 overflow-hidden relative z-10">
              <div className="bg-surface-container-high p-4 rounded-lg flex-1 border border-outline/10">
                <span className="text-xs font-bold text-primary block mb-2">VIRAL</span>
                <p className="text-sm italic">"Chasing sunsets and new horizons. 🌅 #TravelDiaries"</p>
              </div>
              <div className="bg-surface-container-high p-4 rounded-lg flex-1 border border-outline/10">
                <span className="text-xs font-bold text-secondary block mb-2">PROFESSIONAL</span>
                <p className="text-sm italic">"Thrilled to announce the launch of our newest feature! 🚀"</p>
              </div>
            </div>
          </div>

          {/* Bento Item 2 */}
          <div className="bg-surface-container-high rounded-xl p-8 border border-outline-variant/10 relative overflow-hidden group">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="trending_up">trending_up</span>
            <h3 className="font-headline text-2xl font-bold mb-4">Engagement Optimized</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Trained on thousands of viral posts to understand what actually drives likes, comments, and shares in 2024.</p>
          </div>

          {/* Bento Item 3 */}
          <div className="bg-surface-container-high rounded-xl p-8 border border-outline-variant/10 relative overflow-hidden group col-span-1">
            <span className="material-symbols-outlined text-primary text-4xl mb-6" data-icon="bolt">bolt</span>
            <h3 className="font-headline text-2xl font-bold mb-4">Lightning Fast</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Wait seconds, not minutes. Our optimized pipeline guarantees near-instant caption generation.</p>
          </div>

          {/* Bento Item 4 */}
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 relative overflow-hidden group">
            <h3 className="font-headline text-2xl font-bold mb-4">Perfectly Vibe-Matched</h3>
            <p className="text-on-surface-variant mb-6 max-w-md text-sm leading-relaxed">Whether you need something professional for LinkedIn, or unhinged and sarcastic for TikTok, we've got the exact tone you need.</p>
            <div className="flex flex-wrap gap-2">
              {['Funny & Witty', 'Sad & Deep', 'Motivational', 'Sarcastic', 'Professional'].map(vibe => (
                <span key={vibe} className="px-3 py-1 bg-surface-bright border border-outline/10 rounded-full text-xs font-bold text-on-surface-variant">{vibe}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAB for quick access (Mobile Only) */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg md:hidden z-50 group active:scale-90 transition-transform">
        <span className="material-symbols-outlined text-white text-3xl" data-icon="add">add</span>
      </button>
    </main>
  );
}
