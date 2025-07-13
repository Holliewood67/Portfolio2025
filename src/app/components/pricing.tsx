'use client'

import { useInView } from "react-intersection-observer"

export default function Pricing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section id="pricing" className="w-full py-16 px-4">
      <div ref={ref} className={inView ? 'slide-top max-w-5xl mx-auto' : 'opacity-0 max-w-5xl mx-auto'}>
        <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>

        <div className="bg-green-800/30 rounded-xl p-6 mb-12 shadow-black shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Single-Page Website – $150</h3>
          <p className="text-green-300 text-lg">
            A clean, mobile-friendly site that includes your location, contact info, hours, social links, branding, and key photos. Built for fast loading and easy updates. Perfect for small businesses, artists, and local projects that need a web presence without the bloat.
          </p>
        </div>

        <div className="bg-green-800/30 rounded-xl p-6 mb-12 shadow-black shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Add-Ons</h3>
          <ul className="text-green-300 text-lg list-disc list-inside space-y-3">
            <li><strong>Event Calendar Integration</strong> – +$50  
              <br /><span className="text-sm text-green-300">Sync with Google Calendar to auto-display upcoming events.</span></li>
            <li><strong>Photo Gallery or Video Header</strong> – +$25–$50  
              <br /><span className="text-sm text-green-300">Highlight your space or vibe with rich visuals.</span></li>
            <li><strong>Simple Merch Store Setup</strong> – +$100  
              <br /><span className="text-sm text-green-300">Includes Ko-fi, Shopify, or other third-party integration.</span></li>
            <li><strong>Domain & Hosting Setup</strong> – Free  
              <br /><span className="text-sm text-green-300">I&apos;ll help you get your custom domain and hosting squared away.</span></li>
          </ul>
        </div>

        <div className="bg-green-800/30 rounded-xl p-6 shadow-black shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 ">Ongoing Maintenance</h3>
          <p className="text-green-300 text-lg">
            Need help updating event flyers, hours, photos, or general upkeep?
          </p>
          <ul className="mt-4 list-disc list-inside text-green-300 text-lg space-y-2">
            <li><strong>Monthly Updates & Support</strong> – $25–$50/month</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
