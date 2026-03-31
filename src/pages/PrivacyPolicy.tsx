import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <Link to="/" className="align-wordmark hover:opacity-70 transition-opacity">
            align
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h1 className="text-[28px] font-normal text-[#1A1A18] mb-2">Privacy Policy</h1>
          <p className="text-[14px] text-[#9E9E9E]">
            Last Updated: March 21, 2026 · Effective Date: March 21, 2026
          </p>
          <p className="text-[14px] text-[#9E9E9E] mt-1">
            DPO Contact: <a href="mailto:support@alignapp.world" className="text-[#1A1A18] underline">support@alignapp.world</a>
          </p>
        </div>

        <div className="space-y-12">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">1. Introduction</h2>
            <div className="space-y-4 text-[15px] text-[#6B6B6B] leading-relaxed">
              <p>
                This Privacy Policy explains how we collect, use, store, and protect your personal data when you use Align. We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR).
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>We collect only data necessary to provide our service</li>
                <li>We never sell your personal data</li>
                <li>You have full control over your data</li>
                <li>We use industry-standard security measures</li>
              </ul>
            </div>
          </section>

          {/* 2. Data Controller */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">2. Data Controller</h2>
            <div className="space-y-4 text-[15px] text-[#6B6B6B] leading-relaxed">
              <p>
                The data controller responsible for your personal data is the operator of the Align app. For all privacy inquiries, contact:{' '}
                <a href="mailto:support@alignapp.world" className="text-[#1A1A18] underline">support@alignapp.world</a>
              </p>
              <p>
                For EU users, a Data Protection Officer (DPO) can be reached at the same address.
              </p>
            </div>
          </section>

          {/* 3. What Data We Collect */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">3. What Data We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">3.1 Account Information</h3>
                <ul className="space-y-1 text-[14px] text-[#6B6B6B] list-disc list-inside">
                  <li>Email address — required for account creation and communication</li>
                  <li>Display name — optional, used for personalization</li>
                  <li>Password — stored as a salted bcrypt hash; never stored in plain text</li>
                  <li>Account creation date — for record-keeping</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">3.2 Usage Data</h3>
                <ul className="space-y-1 text-[14px] text-[#6B6B6B] list-disc list-inside">
                  <li>Meditation preferences — focus areas, style, voice selection, duration</li>
                  <li>Meditation history — timestamps, completion status, session counts</li>
                  <li>App usage analytics — feature usage, session duration (with consent)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">3.3 Technical Data</h3>
                <ul className="space-y-1 text-[14px] text-[#6B6B6B] list-disc list-inside">
                  <li>Device information — device type, OS version</li>
                  <li>IP address — for security; anonymized after 30 days</li>
                  <li>App version — for troubleshooting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">3.4 Payment Data</h3>
                <ul className="space-y-1 text-[14px] text-[#6B6B6B] list-disc list-inside">
                  <li>Subscription status — active, cancelled, trial</li>
                  <li>Transaction history — processed by Apple/Google, not stored by us</li>
                </ul>
                <p className="text-[14px] text-[#6B6B6B] mt-2">
                  We do NOT store credit card numbers, bank details, or payment credentials. All payment data is handled by Apple App Store, Google Play, or Stripe under their own privacy policies.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">3.5 AI Processing Data</h3>
                <ul className="space-y-1 text-[14px] text-[#6B6B6B] list-disc list-inside">
                  <li>Your focus areas and preferences are sent to Anthropic Claude to generate meditation scripts</li>
                  <li>Generated scripts are sent to ElevenLabs for audio synthesis</li>
                  <li>Questionnaire answers you provide during session creation are used only to generate your meditation and are never stored on our servers. They are passed directly to the AI and discarded.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">3.6 Journal Entries</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Journal entries are stored only on your device (AsyncStorage). They are never transmitted to or stored on our servers. Only a mood signal (e.g., "calm", "hopeful") is optionally saved server-side for aggregate analytics — no free text is ever stored.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Legal Basis for Processing */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-[#E5E5E5]">
                    <th className="text-left py-3 text-[#1A1A18] font-medium">Purpose</th>
                    <th className="text-left py-3 text-[#1A1A18] font-medium">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="text-[#6B6B6B]">
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-3">Account creation and authentication</td>
                    <td className="py-3">Contract performance (Art. 6(1)(b))</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-3">Meditation generation</td>
                    <td className="py-3">Contract performance (Art. 6(1)(b))</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-3">Payment processing</td>
                    <td className="py-3">Contract performance (Art. 6(1)(b))</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-3">Customer support</td>
                    <td className="py-3">Legitimate interest (Art. 6(1)(f))</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-3">Service improvement</td>
                    <td className="py-3">Legitimate interest (Art. 6(1)(f))</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-3">Marketing emails</td>
                    <td className="py-3">Consent (Art. 6(1)(a)) — opt-in only</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-3">Analytics</td>
                    <td className="py-3">Consent (Art. 6(1)(a)) — opt-in only</td>
                  </tr>
                  <tr>
                    <td className="py-3">Legal compliance</td>
                    <td className="py-3">Legal obligation (Art. 6(1)(c))</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. How We Use Your Data */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">5. How We Use Your Data</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">Primary purposes</h3>
                <ul className="space-y-1 text-[14px] text-[#6B6B6B] list-disc list-inside">
                  <li>Generate personalized meditations using your preferences and AI services</li>
                  <li>Store your meditation history and preferences</li>
                  <li>Process subscription payments through Apple, Google, or Stripe</li>
                  <li>Provide customer support</li>
                  <li>Send service notifications (account alerts, subscription renewals)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">What we do NOT do</h3>
                <ul className="space-y-1 text-[14px] text-[#6B6B6B] list-disc list-inside">
                  <li>Sell your personal data to third parties</li>
                  <li>Use your data for advertising outside the App</li>
                  <li>Share your journal entries with anyone</li>
                  <li>Store raw questionnaire answers</li>
                  <li>Retain data longer than necessary</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Third-Party Services */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">6. Third-Party Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">6.1 Anthropic Claude — AI Text Generation</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Used to generate personalized meditation scripts. Your focus areas and meditation preferences are sent to Anthropic's API. Anthropic does not retain API data for model training. Data is transmitted via HTTPS/TLS.{' '}
                  <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1A1A18] underline">Anthropic Privacy Policy →</a>
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">6.2 ElevenLabs — Voice Synthesis</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Used to convert meditation scripts to audio. Only the text script (no personal identifiers) is sent for synthesis.{' '}
                  <a href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1A1A18] underline">ElevenLabs Privacy Policy →</a>
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">6.3 RevenueCat — Subscription Management</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Used to manage in-app subscriptions and track purchase status. Subscription status and user ID are shared.{' '}
                  <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1A1A18] underline">RevenueCat Privacy Policy →</a>
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">6.4 Apple App Store / Google Play</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Used for app distribution and payment processing. Subject to Apple and Google's respective privacy policies.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Data Storage and Security */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">7. Data Storage and Security</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">7.1 Security Measures</h3>
                <ul className="space-y-1 text-[14px] text-[#6B6B6B] list-disc list-inside">
                  <li>Encryption in transit: TLS 1.3 for all data transmission</li>
                  <li>Password hashing: bcrypt with salt</li>
                  <li>Access controls: role-based access, principle of least privilege</li>
                  <li>Session management: secure HTTP-only cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">7.2 Data Retention</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-[14px]">
                    <thead>
                      <tr className="border-b border-[#E5E5E5]">
                        <th className="text-left py-2 text-[#1A1A18] font-medium">Data Type</th>
                        <th className="text-left py-2 text-[#1A1A18] font-medium">Retention Period</th>
                        <th className="text-left py-2 text-[#1A1A18] font-medium">Deletion Method</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#6B6B6B]">
                      <tr className="border-b border-[#E5E5E5]">
                        <td className="py-2">Account data</td>
                        <td className="py-2">Until deletion request</td>
                        <td className="py-2">Permanent deletion within 30 days</td>
                      </tr>
                      <tr className="border-b border-[#E5E5E5]">
                        <td className="py-2">Meditation history</td>
                        <td className="py-2">Until deletion request</td>
                        <td className="py-2">Permanent deletion within 30 days</td>
                      </tr>
                      <tr className="border-b border-[#E5E5E5]">
                        <td className="py-2">Meditation preferences</td>
                        <td className="py-2">Until deletion request</td>
                        <td className="py-2">Permanent deletion within 30 days</td>
                      </tr>
                      <tr className="border-b border-[#E5E5E5]">
                        <td className="py-2">Journal entries</td>
                        <td className="py-2">Device-only, never server-stored</td>
                        <td className="py-2">Cleared on app uninstall</td>
                      </tr>
                      <tr className="border-b border-[#E5E5E5]">
                        <td className="py-2">Questionnaire answers</td>
                        <td className="py-2">Never stored (pass-through only)</td>
                        <td className="py-2">Not applicable</td>
                      </tr>
                      <tr className="border-b border-[#E5E5E5]">
                        <td className="py-2">Payment records</td>
                        <td className="py-2">7 years (legal requirement)</td>
                        <td className="py-2">Anonymized after 7 years</td>
                      </tr>
                      <tr className="border-b border-[#E5E5E5]">
                        <td className="py-2">Server logs</td>
                        <td className="py-2">30 days rolling</td>
                        <td className="py-2">Automatic deletion</td>
                      </tr>
                      <tr className="border-b border-[#E5E5E5]">
                        <td className="py-2">AI inputs / outputs</td>
                        <td className="py-2">30 days</td>
                        <td className="py-2">Automatic deletion</td>
                      </tr>
                      <tr>
                        <td className="py-2">Consent records</td>
                        <td className="py-2">7 years (legal compliance)</td>
                        <td className="py-2">Retained per legal obligation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">7.3 Account Deletion</h3>
                <p className="text-[14px] text-[#6B6B6B] mb-2">
                  You can delete your account through three methods:
                </p>
                <ul className="space-y-1 text-[14px] text-[#6B6B6B] list-disc list-inside">
                  <li>In-app: Privacy Center → Account → Delete Account</li>
                  <li>Web: <Link to="/delete-account" className="text-[#1A1A18] underline">/delete-account</Link></li>
                  <li>Email: <a href="mailto:support@alignapp.world" className="text-[#1A1A18] underline">support@alignapp.world</a> with subject "Delete My Account"</li>
                </ul>
                <p className="text-[14px] text-[#6B6B6B] mt-2">
                  Upon deletion: account is immediately deactivated, data is removed from active systems within 7 days, and completely removed from all backups within 30 days. A confirmation email is sent when deletion is complete.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-2">7.4 Data Breach Response</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  In the event of a data breach, we will notify affected users and relevant supervisory authorities within 72 hours as required by GDPR, and will provide details of the breach and mitigation measures.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Your Rights (GDPR) */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">8. Your Rights (GDPR)</h2>
            <p className="text-[14px] text-[#6B6B6B] mb-4">
              All rights below are accessible directly through the Privacy Center in the App (Settings → Privacy Center).
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Right to Access (Art. 15)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Export a complete copy of all your personal data as a JSON file from the Privacy Center. Delivered instantly, free of charge.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Right to Rectification (Art. 16)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Update your profile, email, display name, and preferences at any time in App settings. Changes take effect immediately.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Right to Erasure (Art. 17)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Delete your meditation history only, or delete your entire account. Both options available in the Privacy Center. Full erasure within 30 days.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Right to Restrict Processing (Art. 18)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Manage consent preferences and pause non-essential processing through the Privacy Center at any time.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Right to Data Portability (Art. 20)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Download all your personal data in structured, machine-readable JSON format from the Privacy Center.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Right to Object (Art. 21)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Opt out of marketing emails instantly via any email footer or through the Privacy Center. Opt out of analytics at any time.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Right to Withdraw Consent (Art. 7)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Withdraw consent for analytics and marketing communications at any time. Withdrawal does not affect the lawfulness of prior processing.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Right to Lodge a Complaint (Art. 77)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  You may complain to the Dutch supervisory authority: Autoriteit Persoonsgegevens, or your local EU Data Protection Authority.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Consent Management */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">9. Consent Management</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Analytics (Optional)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Opt-in required. Can be revoked at any time in the Privacy Center. Revoking stops non-essential tracking while the app continues to function normally.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Marketing Emails (Optional)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Unchecked by default. One-click unsubscribe in every email. Can be revoked in the Privacy Center.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Personalized Emails (Optional)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  Separate from marketing emails. Focused on your wellness journey. Unchecked by default, can be revoked independently.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-[#1A1A18] mb-1">Core Service Processing (No Separate Consent Required)</h3>
                <p className="text-[14px] text-[#6B6B6B]">
                  The following are essential to provide the service and do not require separate consent: meditation generation, account management, payment processing, customer support, and security monitoring. Legal basis: contract performance (Art. 6(1)(b) GDPR).
                </p>
              </div>
            </div>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">10. Children's Privacy</h2>
            <div className="space-y-4 text-[15px] text-[#6B6B6B] leading-relaxed">
              <p>
                Align is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover we have collected data from a child under 13 without parental consent, we will immediately delete the account and all associated data within 48 hours.
              </p>
              <p>
                Users aged 13–16 may use Align with parental or guardian consent. By creating an account, users in this age range confirm they have obtained such consent.
              </p>
              <p>
                If you are a parent or guardian and believe your child has provided us with personal data, contact us at{' '}
                <a href="mailto:support@alignapp.world" className="text-[#1A1A18] underline">support@alignapp.world</a>{' '}
                with subject "Underage Account Report". We will respond within 48 hours.
              </p>
            </div>
          </section>

          {/* 11. International Data Transfers */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">11. International Data Transfers</h2>
            <p className="text-[15px] text-[#6B6B6B] leading-relaxed">
              Your data may be transferred to and processed in countries outside the European Economic Area (EEA), including the United States. All international transfers comply with GDPR Chapter V requirements through Standard Contractual Clauses (SCCs) and Data Processing Agreements (DPAs) with all third-party processors.
            </p>
          </section>

          {/* 12. AI Transparency */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">12. AI Transparency</h2>
            <p className="text-[15px] text-[#6B6B6B] mb-4">
              Align uses artificial intelligence to generate personalized meditation content. Here is what AI does and does not do:
            </p>
            <ul className="space-y-2 text-[14px] text-[#6B6B6B] list-disc list-inside">
              <li>AI generates meditation scripts based on your inputs and selected focus areas</li>
              <li>AI converts scripts to audio using voice synthesis</li>
              <li>AI does not make medical or therapeutic diagnoses</li>
              <li>AI does not store or learn from your personal data for other users</li>
              <li>AI does not replace human judgment or professional advice</li>
            </ul>
            <p className="text-[15px] text-[#6B6B6B] mt-4">
              Humans design and maintain all AI systems, review outputs for quality, and provide all customer support.
            </p>
          </section>

          {/* 13. Changes to This Policy */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">13. Changes to This Policy</h2>
            <p className="text-[15px] text-[#6B6B6B] leading-relaxed">
              We may update this Privacy Policy from time to time. For material changes, we will notify you via email and in-app notification at least 30 days before the change takes effect. The "Last Updated" date at the top reflects the most recent revision. Continued use of Align after changes constitutes acceptance of the updated Policy.
            </p>
          </section>

          {/* 14. Contact */}
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A18] mb-4">14. Contact</h2>
            <div className="space-y-2 text-[14px] text-[#6B6B6B]">
              <p>Email: <a href="mailto:support@alignapp.world" className="text-[#1A1A18] underline">support@alignapp.world</a></p>
              <p>General inquiries: Response within 48 hours</p>
              <p>Data access or deletion requests: Acknowledged within 7 days, completed within 30 days</p>
              <p>Availability: Monday–Friday, 9:00–17:00 CET</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E5E5] mt-16">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="align-wordmark hover:opacity-70 transition-opacity">
              align
            </Link>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="micro-label hover:text-[#1A1A18] transition-colors">Privacy</Link>
              <Link to="/terms" className="micro-label hover:text-[#1A1A18] transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
