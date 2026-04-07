export default function Settings() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Dashboard Header */}
      <header className="mb-12">
        <h1 className="font-headline text-4xl mb-2 font-bold tracking-tight text-on-surface">Settings</h1>
        <p className="text-on-surface-variant font-body text-lg">Manage your creative profile and app preferences.</p>
      </header>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar: Premium */}
        <div className="lg:col-span-4 space-y-8">

          {/* Free Tier Info Card */}
          <section className="bg-gradient-to-br from-surface-container to-surface-variant border border-primary/20 p-8 rounded-xl relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-6xl" data-icon="celebration">celebration</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-headline text-2xl font-bold text-primary mb-2">100% Free Forever</h3>
              <p className="text-on-surface-variant mb-6 font-medium">Enjoy unlimited AI generation and custom brand voices without any hidden costs.</p>
              <div className="w-full bg-surface-container border border-outline/10 text-on-surface font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span> Active
              </div>
            </div>
          </section>
        </div>

        {/* Content Area: Settings & Saved */}
        <div className="lg:col-span-8 space-y-8">
          {/* Preferences Panel */}
          <section className="glass-panel p-6 rounded-xl border border-outline/10 hover:border-primary/30">
            <h3 className="font-headline text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary" data-icon="settings_accessibility">settings_accessibility</span>
              App Preferences
            </h3>
            <div className="space-y-6">
              {/* App Settings Options */}
              
              {/* Save History Toggle */}
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                <div>
                  <p className="font-bold">Save History</p>
                  <p className="text-sm text-on-surface-variant">Automatically store your generated captions</p>
                </div>
                <button className="w-14 h-8 bg-primary rounded-full relative flex items-center px-1">
                  <div className="w-6 h-6 bg-on-primary rounded-full ml-auto shadow-sm"></div>
                </button>
              </div>
            </div>
          </section>

          {/* Saved Captions Bento Section */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h3 className="font-headline text-xl font-bold flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" data-icon="bookmark_heart">bookmark_heart</span>
                Saved Captions
              </h3>
              <a className="text-sm text-primary hover:underline font-bold" href="#">View All</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Caption Card 1 */}
              <div className="glass-panel p-6 rounded-lg border border-outline/10 hover:border-primary/30 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm text-xs font-bold tracking-widest">LIFESTYLE</div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors cursor-pointer" data-icon="more_horiz">more_horiz</span>
                </div>
                <p className="text-on-surface font-body leading-relaxed mb-6">
                  "Chasing sunsets and making memories that last a lifetime. ✨ Every golden hour brings a new perspective. #GoldenHour #Vibes"
                </p>
                <div className="flex justify-between items-center text-xs text-on-surface-variant font-medium">
                  <span>2 hours ago</span>
                  <button className="flex items-center gap-1 hover:text-white">
                    <span className="material-symbols-outlined text-sm" data-icon="content_copy">content_copy</span>
                    Copy
                  </button>
                </div>
              </div>
              
              {/* Caption Card 2 */}
              <div className="glass-panel p-6 rounded-lg border border-outline/10 hover:border-primary/30 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary-container text-on-primary-container px-3 py-1 rounded-sm text-xs font-bold tracking-widest">TECH</div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors cursor-pointer" data-icon="more_horiz">more_horiz</span>
                </div>
                <p className="text-on-surface font-body leading-relaxed mb-6">
                  "The future is here, and it's powered by AI. 🤖 Revolutionizing the way we create content one word at a time. #AICreative #Tech"
                </p>
                <div className="flex justify-between items-center text-xs text-on-surface-variant font-medium">
                  <span>Yesterday</span>
                  <button className="flex items-center gap-1 hover:text-white">
                    <span className="material-symbols-outlined text-sm" data-icon="content_copy">content_copy</span>
                    Copy
                  </button>
                </div>
              </div>
              
              {/* Caption Card 3 */}
              <div className="glass-panel p-6 rounded-lg border border-outline/10 hover:border-primary/30 transition-colors group md:col-span-2">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase">Travel</div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors cursor-pointer" data-icon="more_horiz">more_horiz</span>
                </div>
                <p className="text-on-surface font-body leading-relaxed mb-6 text-xl font-medium">
                  "Lost in the beauty of nature... quiet moments and unforgettable memories. 🍃✨ #Wanderlust #Nature"
                </p>
                <div className="flex justify-between items-center text-xs text-on-surface-variant font-medium">
                  <span>3 days ago</span>
                  <button className="flex items-center gap-1 hover:text-white">
                    <span className="material-symbols-outlined text-sm" data-icon="content_copy">content_copy</span>
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
