import React from "react";

export default function About() {
  return (
    <main className="relative pt-24 pb-16 min-h-screen px-6 max-w-4xl mx-auto">
      <div className="glass-panel bg-surface-variant/40 border border-outline-variant/15 rounded-xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface leading-tight">Empowering creators with AI</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Welcome to CaptionCraft. We are a passionate team of developers and marketers who saw a fundamental problem in digital creation: figuring out what to say takes way too much time.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Our mission is to help influencers, small businesses, and social media managers break through writer's block by providing high-quality, engagement-optimized captions in seconds. 
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Whether you need something professional for LinkedIn, or unhinged for TikTok, CaptionCraft acts as your ever-present digital copywriter.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://github.com/dilshankavishkasampath00"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              GitHub Profile
            </a>
            <a
              href="https://github.com/dilshankavishkasampath00/CaptionCraft"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-outline/30 px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
            >
              View Repository
            </a>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/20 rounded-full flex items-center justify-center border-4 border-primary/30 relative overflow-hidden">
            <span className="material-symbols-outlined text-[100px] text-primary">auto_awesome</span>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
