export default function BioGenerator() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
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
                  className="w-full bg-surface-container-high border-none rounded-DEFAULT p-5 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/50 transition-all min-h-[160px]" 
                  placeholder="e.g. Travel photographer based in Kandy, coffee addict, obsessed with vintage film cameras and minimalism..."
                ></textarea>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold tracking-wide text-primary uppercase ml-1">Target Platform</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="cursor-pointer group">
                    <input className="hidden peer" name="platform" type="radio" value="instagram" defaultChecked />
                    <div className="p-4 rounded-DEFAULT bg-surface-container-high peer-checked:bg-secondary-container peer-checked:text-on-secondary-container border border-transparent peer-checked:border-secondary transition-all flex items-center gap-3">
                      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">photo_camera</span>
                      <span className="font-bold">Instagram</span>
                    </div>
                  </label>
                  
                  <label className="cursor-pointer group">
                    <input className="hidden peer" name="platform" type="radio" value="tiktok" />
                    <div className="p-4 rounded-DEFAULT bg-surface-container-high peer-checked:bg-secondary-container peer-checked:text-on-secondary-container border border-transparent peer-checked:border-secondary transition-all flex items-center gap-3">
                      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">movie</span>
                      <span className="font-bold">TikTok</span>
                    </div>
                  </label>
                </div>
              </div>

              <button className="w-full py-4 rounded-lg bg-primary text-on-primary font-semibold text-lg shadow hover:shadow-md flex items-center justify-center gap-3 active:scale-95 transition-transform" type="button">
                <span>GENERATE MAGIC</span>
                <span className="material-symbols-outlined">auto_awesome</span>
              </button>
            </form>
          </div>
        </section>

        {/* Results Grid */}
        <section className="lg:col-span-7 space-y-8">
          <div className="flex items-end justify-between px-2">
            <h3 className="font-headline text-3xl font-extrabold tracking-tight">Curated <span className="text-secondary italic">Options</span></h3>
            <span className="text-outline text-sm">3 Results Found</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bio Option 1 */}
            <div className="group relative bg-surface-container-high p-8 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all flex flex-col justify-between overflow-hidden">

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-tighter">Aesthetic</span>
                  <button className="text-outline hover:text-white transition-colors">
                    <span className="material-symbols-outlined">content_copy</span>
                  </button>
                </div>
                <p className="text-on-surface text-lg leading-relaxed font-medium">
                  Capturing the soul of Sri Lanka through a 35mm lens. 🎞️☕️<br/>
                  Minimalist vibes | Kandy based.<br/>
                  Let’s find beauty in the mundane.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-xs text-outline italic">Perfect for Instagram Feed</span>
                <span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
              </div>
            </div>

            {/* Bio Option 2 */}
            <div className="group relative bg-surface-container-high p-8 rounded-lg border border-outline-variant/10 hover:border-secondary/30 transition-all flex flex-col justify-between overflow-hidden md:translate-y-8">

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-tighter">Professional</span>
                  <button className="text-outline hover:text-white transition-colors">
                    <span className="material-symbols-outlined">content_copy</span>
                  </button>
                </div>
                <p className="text-on-surface text-xl leading-relaxed font-bold">
                  Helping brands tell their story through a 35mm lens. 📸✨<br/>
                  Embracing simplicity & authentic moments.<br/>
                  Coffee & Cameras. ☕️🎞️
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-xs text-outline italic">High Engagement</span>
                <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
              </div>
            </div>

            {/* Bio Option 3 */}
            <div className="group relative bg-surface-container-high p-8 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all flex flex-col justify-between overflow-hidden">

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-tighter">Short & Punchy</span>
                  <button className="text-outline hover:text-white transition-colors">
                    <span className="material-symbols-outlined">content_copy</span>
                  </button>
                </div>
                <p className="text-on-surface text-lg leading-relaxed">
                  📸 Capturing Kandy.<br/>
                  ☕️ Powered by Caffeine.<br/>
                  🎞️ Film isn't dead.<br/>
                  📍 SL
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-xs text-outline italic">Best for TikTok Bio</span>
                <span className="material-symbols-outlined text-secondary text-sm">bolt</span>
              </div>
            </div>

            {/* CTA Feature Card */}
            <div className="bg-gradient-to-br from-surface-variant to-surface p-1 rounded-lg md:translate-y-8">
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
