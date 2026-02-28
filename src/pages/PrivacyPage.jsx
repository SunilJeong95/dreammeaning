import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: February 28, 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Overview</h2>
            <p>
              DreamLens ("we," "us," or "our") operates the website at dreamlens.app (the "Service"). This
              Privacy Policy explains how we collect, use, and protect your information when you use our Service.
              By using DreamLens, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">
              <strong className="text-white">Dream text you enter:</strong> When you submit a dream for analysis,
              the text is sent to Google's Gemini AI API to generate your interpretation and dream image. We do
              not permanently store your dream text on our servers. Dream entries are held in your browser's
              session storage only for the duration of your session and are cleared when you close the tab.
            </p>
            <p className="mb-3">
              <strong className="text-white">Usage data:</strong> Like most websites, we may collect standard
              server log data such as your IP address, browser type, pages visited, and referring URLs. This
              data is used for analytics, security, and service improvement.
            </p>
            <p>
              <strong className="text-white">Cookies:</strong> We use cookies and similar tracking technologies
              to improve your experience and to serve personalized advertising through Google AdSense. See
              Section 5 for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To generate AI-powered dream analyses and dream images via the Gemini API</li>
              <li>To operate, maintain, and improve the Service</li>
              <li>To understand how users interact with the Service (analytics)</li>
              <li>To display relevant advertisements through Google AdSense</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Services</h2>
            <p className="mb-3">
              <strong className="text-white">Google Gemini AI:</strong> Dream text you submit is processed by
              Google's Gemini AI models. Google's use of this data is governed by
              the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a>.
            </p>
            <p>
              <strong className="text-white">Google AdSense:</strong> We use Google AdSense to display
              advertisements on our site. Google AdSense uses cookies and web beacons to serve ads based on
              your prior visits to our website and other websites. Google's use of advertising cookies enables
              it and its partners to serve ads based on your visit to our site and/or other sites on the
              Internet. You may opt out of personalized advertising by visiting
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> Google Ads Settings</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Cookies and Advertising</h2>
            <p className="mb-3">
              Cookies are small text files stored on your device. We use them to remember session state and
              to enable advertising functionality.
            </p>
            <p className="mb-3">
              <strong className="text-white">Advertising cookies:</strong> Google AdSense and its advertising
              partners use cookies (including the DoubleClick cookie) to serve ads and to personalize ads based
              on your interests. These cookies allow Google and its partners to serve ads based on your past
              visits to DreamLens and other websites.
            </p>
            <p className="mb-3">
              <strong className="text-white">Opting out:</strong> You can opt out of Google's use of cookies
              for interest-based advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aboutads.info</a> or
              the <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Network Advertising Initiative opt-out page</a>.
            </p>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However,
              limiting cookies may affect your experience on some sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
            <p>
              Dream text entered by users is processed in real time and is not stored on our servers after
              the session ends. Any data held temporarily in your browser's session storage is cleared when
              you close the browser tab. We do not maintain a database of user dream entries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Children's Privacy</h2>
            <p>
              DreamLens is not directed at children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you believe a child under 13 has provided us with
              personal information, please contact us and we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your information. However,
              no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security
              of any information you transmit to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Your Rights</h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have rights regarding your personal data, including the
              right to access, correct, or delete your data. Since we do not maintain a persistent database of
              user dream entries, most data is automatically cleared at session end.
            </p>
            <p>
              For any privacy-related requests or questions, please contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant
              changes by updating the "Last updated" date at the top of this page. Continued use of the
              Service after changes constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:wjdtjsdlf210@gmail.com" className="text-primary hover:underline">
                wjdtjsdlf210@gmail.com
              </a>
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
