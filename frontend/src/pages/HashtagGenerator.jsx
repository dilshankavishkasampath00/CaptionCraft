import { useState } from "react";
import { Helmet } from "react-helmet-async";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log("Debug - API Key Loaded:", API_KEY ? "Present" : "UNDEFINED");

export default function HashtagGenerator() {
  const [topic, setTopic] = useState("");
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
      const prompt = `Generate a comprehensive list of highly engaging and viral hashtags for ${platform}. 
Topic: ${topic}

Please provide 3 distinct sets of hashtags based on reach:
Return exactly this format as raw JSON without markdown format blocks around it:
{
  "niche": ["#nichetag1", "#nichetag2"],
  "trending": ["#trending1", "#trending2"],
  "broad": ["#broad1", "#broad2"]
}
Limit each array to 10 hashtags (30 hashtags total).
`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7
          }
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Failed to generate");

      let text = data.candidates[0].content.parts[0].text;
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
    { id: "LinkedIn", icon: "article" },
    { id: "YouTube", icon: "play_circle" },
  ];

  return (
    <main className="relative pt-24 pb-16 min-h-screen">
      <Helmet>
        <title>Viral Hashtag Generator - Instagram & TikTok Strategy</title>
        <meta name="description" content="Stop guessing! Let our AI generate the perfect mix of niche, trending, and broad hashtags to maximize your reach on Instagram, TikTok and LinkedIn." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
            Viral <span className="text-primary">Hashtag Generator</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Stop guessing! Let AI analyze your topic and generate the perfect mix of niche, trending, and broad hashtags for maximum reach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Editor/Input Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none rounded-full"></div>
              
              <div className="space-y-8 relative z-10">
                {/* Topic Input */}
                <div className="flex flex-col gap-2">
                  <label className="font-label text-xs font-bold uppercase tracking-wider text-primary">Content Topic</label>
                  <textarea 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    rows="3"
                    className="w-full bg-surface-container border border-transparent rounded-lg px-5 py-4 focus:border-primary/40 focus:bg-surface-bright transition-all text-on-surface placeholder:text-outline resize-none" 
                    placeholder="e.g. coffee shop aesthetics, remote working lifestyle..." 
                  ></textarea>
                </div>

                {/* Target Platform */}
                <div className="flex flex-col gap-2">
                  <label className="font-label text-xs font-bold uppercase tracking-wider text-primary">Target Platform</label>
                  <div className="grid grid-cols-2 gap-3">
                    {platformList.map((p) => (
                      <button 
                        key={p.id}
                        onClick={() => setPlatform(p.id)}
                        className={`flex items-center justify-center gap-2 py-3 border rounded-lg font-bold transition-all hover:scale-[1.02] active:scale-95 ${
                          platform === p.id 
                            ? "bg-primary/20 border-primary text-primary" 
                            : "bg-surface-container border-transparent text-on-surface-variant hover:text-white"
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm" data-icon={p.icon}>{p.icon}</span>
                        <span>{p.id}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-error/20 text-error rounded-lg text-sm font-medium border border-error/30 text-left">
                    {error}
                  </div>
                )}

                {/* Generate Button */}
                <button 
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full bg-primary disabled:opacity-50 disabled:active:scale-100 text-on-primary font-headline font-semibold text-lg py-4 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-3 group">
                  <span className="relative">{loading ? "Analyzing Trends..." : "Generate Hashtags"}</span>
                  <span className={`material-symbols-outlined relative ${loading ? "animate-spin" : ""}`} data-icon={loading ? "hourglass_empty" : "tag"}>
                    {loading ? "hourglass_empty" : "tag"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Preview Section */}
          <div className="lg:col-span-7">
            {results ? (
              <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-8 h-full animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-headline font-bold text-2xl">Your Hashtag Strategy</h3>
                  <button 
                    onClick={() => navigator.clipboard.writeText([...results.niche, ...results.trending, ...results.broad].join(' '))}
                    className="flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full font-bold text-sm tracking-wider hover:bg-primary/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span> Copy All
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Niche Tags */}
                  <div>
                    <h4 className="flex items-center gap-2 text-primary font-bold mb-3">
                      <span className="material-symbols-outlined size-5 text-sm">my_location</span> Niche (High Conversion)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {results.niche.map((tag, i) => (
                        <button key={`niche-${i}`} onClick={() => navigator.clipboard.writeText(tag)} className="px-3 py-1.5 bg-surface-container rounded-md text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors border border-outline/5 hover:border-primary/30">{tag}</button>
                      ))}
                    </div>
                  </div>

                  {/* Trending Tags */}
                  <div>
                    <h4 className="flex items-center gap-2 text-secondary font-bold mb-3">
                      <span className="material-symbols-outlined size-5 text-sm">trending_up</span> Trending (High Visibility)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {results.trending.map((tag, i) => (
                        <button key={`trending-${i}`} onClick={() => navigator.clipboard.writeText(tag)} className="px-3 py-1.5 bg-surface-container rounded-md text-sm font-medium hover:bg-secondary/20 hover:text-secondary transition-colors border border-outline/5 hover:border-secondary/30">{tag}</button>
                      ))}
                    </div>
                  </div>

                  {/* Broad Tags */}
                  <div>
                    <h4 className="flex items-center gap-2 text-on-surface font-bold mb-3">
                      <span className="material-symbols-outlined size-5 text-sm">public</span> Broad (Max Reach)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {results.broad.map((tag, i) => (
                        <button key={`broad-${i}`} onClick={() => navigator.clipboard.writeText(tag)} className="px-3 py-1.5 bg-surface-container rounded-md text-sm font-medium hover:bg-surface-bright hover:text-white transition-colors border border-outline/5 hover:border-white/30">{tag}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-surface-container border border-dashed border-outline/30 rounded-xl p-8 h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mb-6 border border-outline/10 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-outline">tag</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-on-surface mb-2">No hashtags yet</h3>
                <p className="text-on-surface-variant max-w-sm mx-auto">
                  Enter your content topic and select a platform to instantly generate a targeted hashtag strategy.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
