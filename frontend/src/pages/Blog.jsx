import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Best Instagram Captions for 2026: The Ultimate Guide",
      excerpt: "Stop using boring captions. Find out what's working in 2026 to boost your Instagram engagement by up to 400%.",
      date: "Oct 12, 2024",
      category: "Instagram Growth"
    },
    {
      id: 2,
      title: "How to Go Viral on TikTok With Text On Screen",
      excerpt: "TikTok's algorithm loves text. Here's exactly how to use text hooks combined with our viral captions to guarantee views.",
      date: "Oct 05, 2024",
      category: "TikTok Strategies"
    },
    {
      id: 3,
      title: "LinkedIn Post Ideas That Actually Build Authority",
      excerpt: "Move past the humble-brag. Learn the 5 frameworks that top founders use on LinkedIn to attract leads passively.",
      date: "Sep 28, 2024",
      category: "Professional Branding"
    }
  ];

  return (
    <main className="relative pt-24 pb-16 min-h-screen px-6 max-w-5xl mx-auto">
      <Helmet>
        <title>Social Media Growth Blog | CaptionCraft AI</title>
        <meta name="description" content="Master the art of social media growth with our latest insights, strategies, and platform-specific tips for Instagram, TikTok, and LinkedIn." />
      </Helmet>
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-4">CaptionCraft Blog</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">Master the art of social media growth with our latest insights, strategies, and platform-specific tips.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="glass-panel bg-surface-variant/40 border border-outline-variant/15 rounded-xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col">
            <div className="h-48 bg-surface-container-high relative overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-outline/20 text-6xl group-hover:scale-110 transition-transform duration-500">article</span>
              <div className="absolute top-4 left-4 bg-primary/90 text-on-primary text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                {post.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-sm text-on-surface-variant mb-2">{post.date}</span>
              <h2 className="text-xl font-bold text-on-surface mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-on-surface-variant line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-bold hover:underline underline-offset-4">
                Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
