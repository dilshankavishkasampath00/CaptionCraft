import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="relative pt-24 pb-16 min-h-screen px-6 max-w-4xl mx-auto">
      <div className="glass-panel bg-surface-variant/40 border border-outline-variant/15 rounded-xl p-8 md:p-12">
        <h1 className="font-headline text-4xl font-bold mb-6 text-on-surface">Privacy Policy</h1>
        <p className="text-on-surface-variant italic mb-8">Last Updated: October 2024</p>
        
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you create an account, use our services, or communicate with us. This may include your name, email address, and generated captions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to operate, maintain, and improve our services, as well as to communicate with you and personalize your experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-3">3. Cookies & Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information to enhance your experience. Third-party vendors Google use cookies to serve ads based on your prior visits.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-3">4. Google AdSense</h2>
            <p>We use Google AdSense Advertising on our website. Google, as a third-party vendor, uses cookies to serve ads. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-3">5. Data Security</h2>
            <p>We prioritize the security of your personal information but remember that no method of transmission over the Internet is 100% secure. We strive to use commercially acceptable means to protect your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-3">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us by email at <a href="mailto:nexasolutionspvtltd@gmail.com" className="text-primary hover:underline font-bold">nexasolutionspvtltd@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
