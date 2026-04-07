import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="relative pt-24 pb-16 min-h-screen px-6 max-w-3xl mx-auto">
      <div className="glass-panel bg-surface-variant/40 border border-outline-variant/15 rounded-xl p-8 md:p-12">
        <h1 className="font-headline text-4xl font-bold mb-4 text-on-surface text-center">Contact Us</h1>
        <p className="text-on-surface-variant text-center mb-10 max-w-lg mx-auto">Have questions, feedback, or business inquiries? We'd love to hear from you. Fill out the form below or email us directly at <a href="mailto:nexasolutionspvtltd@gmail.com" className="text-primary hover:underline font-bold">nexasolutionspvtltd@gmail.com</a>.</p>
        
        {sent ? (
          <div className="bg-primary/20 border border-primary/30 p-8 rounded-xl text-center">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">check_circle</span>
            <h2 className="text-2xl font-bold text-on-surface mb-2">Message Sent!</h2>
            <p className="text-on-surface-variant">Thank you for reaching out. We will respond within 24-48 hours.</p>
            <button onClick={() => setSent(false)} className="mt-6 px-6 py-2 bg-surface-container rounded-lg font-bold text-primary hover:bg-surface-bright transition-colors">Send Another</button>
          </div>
        ) : (
          <form action="https://formsubmit.co/nexasolutionspvtltd@gmail.com" method="POST" className="space-y-6">
            {/* Prevent spam and configure redirect */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New submission from CaptionCraft Contact Form!" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold uppercase text-on-surface-variant">Name</label>
                <input required type="text" name="name" className="bg-surface-container border border-transparent rounded-lg px-4 py-3 focus:border-primary/40 focus:bg-surface-bright transition-all text-on-surface" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold uppercase text-on-surface-variant">Email</label>
                <input required type="email" name="email" className="bg-surface-container border border-transparent rounded-lg px-4 py-3 focus:border-primary/40 focus:bg-surface-bright transition-all text-on-surface" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-label text-xs font-bold uppercase text-on-surface-variant">Topic</label>
              <select name="topic" className="bg-surface-container border border-transparent rounded-lg px-4 py-3 focus:border-primary/40 focus:bg-surface-bright transition-all text-on-surface">
                <option>General Inquiry</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>Billing Question</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label text-xs font-bold uppercase text-on-surface-variant">Message</label>
              <textarea required name="message" rows="5" className="bg-surface-container border border-transparent rounded-lg px-4 py-3 focus:border-primary/40 focus:bg-surface-bright transition-all text-on-surface resize-none" placeholder="How can we help?"></textarea>
            </div>

            <button type="submit" className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg hover:shadow-lg transition-all active:scale-95">
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
