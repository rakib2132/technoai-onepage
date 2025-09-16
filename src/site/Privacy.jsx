import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: September 2025</p>

        <p className="mb-6">
          Techno AI Marketing & IT LLC (“we,” “our,” “us”) respects your privacy and is committed to
          protecting the personal information you share with us. This Privacy Policy explains what data we collect, how we use it, and your rights.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Contact details: your name, email address, phone number, and business name.</li>
          <li>Message content: details you share in your consultation request or contact form.</li>
          <li>Technical info: IP address, browser type, and basic analytics (non-personal, aggregated).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Respond to your inquiries and provide requested services.</li>
          <li>Send proposals, updates, or marketing messages (only if you consent).</li>
          <li>Improve our website, services, and customer experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Sharing of Information</h2>
        <p>
          We do <b>not</b> sell your personal information. We may share your data only with:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Service providers (such as Formspree or email providers).</li>
          <li>Legal authorities if required by law.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Retention</h2>
        <p>
          We keep your personal data only as long as necessary to provide our services or comply with legal obligations.
          You can request deletion at any time (see Section 6).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect your information. However, no system is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Your Rights</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Request access to the personal data we hold about you.</li>
          <li>Request correction or deletion of your information.</li>
          <li>Opt-out of receiving marketing communications.</li>
        </ul>
        <p className="mt-2">
          To exercise these rights, email us at: <b>info@technoaimarketing.com</b>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">7. Third-Party Links</h2>
        <p>Our website may link to third-party websites. We are not responsible for their privacy practices.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Children’s Privacy</h2>
        <p>Our services are not directed at children under 13, and we do not knowingly collect data from them.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">9. Updates to This Policy</h2>
        <p>We may update this page. The updated version will show a new “Last updated” date.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">10. Contact Us</h2>
        <p>
          Questions? Contact:
          <br />📧 <b>info@technoaimarketing.com</b>
          <br />📍 Malvern, PA, USA
        </p>

        <p className="mt-10 text-xs text-slate-500">
          Disclaimer: This template is informational and not legal advice.
        </p>
      </div>
    </div>
  );
}