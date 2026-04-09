import { useState } from "react";
import { Helmet } from "react-helmet-async";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log("Debug - API Key Loaded:", API_KEY ? "Present" : "UNDEFINED");

export default function BioGenerator() {
  const [vibe, setVibe] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!vibe.trim()) {
      setError("Please describe your vibe!");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const prompt = `Generate 3 distinct social media bios for ${platform}. 
User Description: ${vibe}

Please provide 3 variations:
1. Aesthetic/Creative
2. Professional/Authoritative
3. Short & Punchy

Include relevant emojis.
Return exactly this format as raw JSON:
{
  "bios": [
    {"type": "Aesthetic", "content": "bio text", "note": "Perfect for Instagram Feed"},
    {"type": "Professional", "content": "bio text", "note": "High Engagement"},
    {"type": "Punchy", "content": "bio text", "note": "Best for TikTok Bio"}
  ]
}
`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            responseMimeType: "application/json"
          }
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Failed to generate");

      let text = data.candidates[0].content.parts[0].text;
      setResults(JSON.parse(text).bios);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <Helmet>
        <title>AI Social Media Bio Generator - Instantly Craft Your Digital Soul</title>
        <meta name="description" content="Use our free AI bio generator to create unique, engaging, and professional social media bios for Instagram, TikTok, LinkedIn, and more." />
      </Helmet>
      {/* Hero & Kinetic Aura */}
      <div className="relative mb-16">
        <div className="relative z-10 text-center md:text-left max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-sm bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
            AI-Powered Creative
          </span>
          <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Craft your <span className="text-primary">digital soul.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl font-light">
            Transform your personality into a high-converting social bio in seconds. Stand out from the noise.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Input Section */}
        <section className="lg:col-span-5 bg-surface-container-low p-8 rounded-xl relative overflow-hidden border border-outline-variant/15">
          <div className="relative z-10">
            <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">psychology</span>
              Describe your vibe
            </h2>
            
            <form className="space-y-8">
              <div className="space-y-3">
                <label className="text-sm font-semibold tracking-wide text-primary uppercase ml-1">Tell us about yourself</label>
                <textarea 
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value)}
                  className="w-full bg-surface-container-high border-none rounded-DEFAULT p-5 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/50 transition-all min-h-[160px]" 
                  placeholder="e.g. Travel photographer based in Kandy, coffee addict, obsessed with vintage film cameras and minimalism..."
                ></textarea>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold tracking-wide text-primary uppercase ml-1">Target Platform</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => setPlatform("Instagram")}
                    className={`p-4 rounded-DEFAULT border transition-all flex items-center gap-3 ${platform === "Instagram" ? "bg-secondary-container text-on-secondary-container border-secondary" : "bg-surface-container-high border-transparent text-on-surface-variant"}`}
                  >
                    <span className="material-symbols-outlined">photo_camera</span>
                    <span className="font-bold">Instagram</span>
                  </button>
                  
                  <button 
                    type="button"
                    onClick={() => setPlatform("TikTok")}
                    className={`p-4 rounded-DEFAULT border transition-all flex items-center gap-3 ${platform === "TikTok" ? "bg-secondary-container text-on-secondary-container border-secondary" : "bg-surface-container-high border-transparent text-on-surface-variant"}`}
                  >
                    <span className="material-symbols-outlined">movie</span>
                    <span className="font-bold">TikTok</span>
                  </button>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-error/20 text-error rounded-lg text-sm font-medium border border-error/30">
                  {error}
                </div>
              )}

              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-4 rounded-lg bg-primary text-on-primary font-semibold text-lg shadow hover:shadow-md flex items-center justify-center gap-3 active:scale-95 transition-transform disabled:opacity-50" 
                type="button"
              >
                <span>{loading ? "BREWING..." : "GENERATE MAGIC"}</span>
                <span className={`material-symbols-outlined ${loading ? "animate-spin" : ""}`}>{loading ? "hourglass_empty" : "auto_awesome"}</span>
              </button>
            </form>
          </div>
        </section>

        {/* Results Grid */}
        <section className="lg:col-span-7 space-y-8">
          <div className="flex items-end justify-between px-2">
            <h3 className="font-headline text-3xl font-extrabold tracking-tight">Curated <span className="text-secondary italic">Options</span></h3>
            <span className="text-outline text-sm">{results ? results.length : 0} Results Found</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results ? (
              results.map((bio, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-surface-container-high p-8 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all flex flex-col justify-between overflow-hidden ${(index === 1 && "md:translate-y-8") || (index === 3 && "md:translate-y-8")}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-tighter">{bio.type}</span>
                      <button 
                        onClick={() => navigator.clipboard.writeText(bio.content)}
                        className="text-outline hover:text-white transition-colors"
                      >
                        <span className="material-symbols-outlined">content_copy</span>
                      </button>
                    </div>
                    <p className="text-on-surface text-lg leading-relaxed font-medium whitespace-pre-wrap">
                      {bio.content}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                    <span className="text-xs text-outline italic">{bio.note}</span>
                    <span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border border-dashed border-outline/20 rounded-xl">
                 <span className="material-symbols-outlined text-6xl text-outline/30 mb-4 block">face_6</span>
                 <p className="text-on-surface-variant">Describe your vibe to see the magic happen!</p>
              </div>
            )}

            {/* CTA Feature Card */}
            <div className={`bg-gradient-to-br from-surface-variant to-surface p-1 rounded-lg ${results && results.length % 2 !== 0 ? "md:translate-y-8" : ""}`}>
              <div className="h-full bg-surface p-8 rounded-[calc(1rem-4px)] flex flex-col justify-center items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">auto_fix_high</span>
                </div>
                <h4 className="font-headline font-bold text-xl">100% Free Forever</h4>
                <p className="text-on-surface-variant text-sm">Our AI can learn your style. Enjoy unlimited variants without ever paying a dime.</p>
                <button className="text-primary font-bold text-sm uppercase tracking-widest hover:underline underline-offset-8">Generate More →</button>
              </div>
            </div>
            
          </div>
        </section>
      </div>

      {/* Floating Navigation (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-panel border border-white/10 px-8 py-4 rounded-xl flex items-center gap-10">
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">home</span>
        </button>
        <button className="text-primary scale-125">
          <span className="material-symbols-outlined">history_edu</span>
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">tag</span>
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>
    </main>
  );
}
