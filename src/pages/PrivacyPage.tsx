import { useEffect } from 'react';
import { Shield, Mail, Lock, Eye, Trash2, Download, UserX } from 'lucide-react';

export const PrivacyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Align';
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <header className="w-full bg-[#1A1A18] py-6">
        <div className="max-w-4xl mx-auto px-8">
          <a href="/" className="align-wordmark-white text-[24px]">align</a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-[#1A1A18]" />
          <h1 className="text-[36px] font-normal text-[#1A1A18]">Privacy Policy</h1>
        </div>

        <p className="text-[14px] text-[#9E9E9E] mb-12">
          Last Updated: March 22, 2026
        </p>

        {/* Data Controller */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Data Controller</h2>
          <div className="bg-white p-6 border border-[#E5E5E5]">
            <p className="text-[16px] text-[#1A1A18] font-medium mb-2">Align App</p>
            <p className="text-[14px] text-[#6B6B6B] mb-1">Operated by: Lars Minnes</p>
            <p className="text-[14px] text-[#6B6B6B] mb-1">Location: Rotterdam, Netherlands</p>
            <div className="flex items-center gap-2 mt-4">
              <Mail className="w-4 h-4 text-[#6B6B6B]" />
              <a href="mailto:support@alignapp.world" className="text-[14px] text-[#1A1A18] underline">
                support@alignapp.world
              </a>
            </div>
          </div>
        </section>

        {/* What We Collect */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-6">What We Collect</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-[#E5E5E5]">
                  <th className="text-left py-3 text-[#1A1A18] font-medium">Data Type</th>
                  <th className="text-left py-3 text-[#1A1A18] font-medium">Purpose</th>
                  <th className="text-left py-3 text-[#1A1A18] font-medium">Retention</th>
                </tr>
              </thead>
              <tbody className="text-[#6B6B6B]">
                <tr className="border-b border-[#E5E5E5]">
                  <td className="py-4">Email address</td>
                  <td className="py-4">Account, communication</td>
                  <td className="py-4">Until deletion + 30 days</td>
                </tr>
                <tr className="border-b border-[#E5E5E5]">
                  <td className="py-4">Name (optional)</td>
                  <td className="py-4">Personalization</td>
                  <td className="py-4">Until deletion + 30 days</td>
                </tr>
                <tr className="border-b border-[#E5E5E5]">
                  <td className="py-4">Meditation preferences</td>
                  <td className="py-4">Personalization</td>
                  <td className="py-4">Until deletion + 30 days</td>
                </tr>
                <tr className="border-b border-[#E5E5E5]">
                  <td className="py-4">Generated scripts</td>
                  <td className="py-4">Service delivery</td>
                  <td className="py-4">Until deletion + 30 days</td>
                </tr>
                <tr className="border-b border-[#E5E5E5]">
                  <td className="py-4">Journal entries</td>
                  <td className="py-4">User feature</td>
                  <td className="py-4">Until deletion + 30 days</td>
                </tr>
                <tr>
                  <td className="py-4">Usage analytics</td>
                  <td className="py-4">App improvement</td>
                  <td className="py-4">Anonymized after 90 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* What We Don't Do */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">What We Don't Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white p-4 border border-[#E5E5E5]">
              <UserX className="w-5 h-5 text-[#9E9E9E]" />
              <span className="text-[14px] text-[#6B6B6B]">Sell your personal data</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 border border-[#E5E5E5]">
              <Eye className="w-5 h-5 text-[#9E9E9E]" />
              <span className="text-[14px] text-[#6B6B6B]">Use data for advertising</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 border border-[#E5E5E5]">
              <Trash2 className="w-5 h-5 text-[#9E9E9E]" />
              <span className="text-[14px] text-[#6B6B6B]">Share journal entries</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 border border-[#E5E5E5]">
              <Lock className="w-5 h-5 text-[#9E9E9E]" />
              <span className="text-[14px] text-[#6B6B6B]">Retain data longer than necessary</span>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-6">Third-Party Services</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 border border-[#E5E5E5]">
              <h3 className="text-[16px] font-medium text-[#1A1A18] mb-2">Anthropic Claude</h3>
              <p className="text-[14px] text-[#6B6B6B] mb-1"><strong>Purpose:</strong> Script generation</p>
              <p className="text-[14px] text-[#6B6B6B]"><strong>Data:</strong> Focus areas, preferences (API terms apply)</p>
            </div>
            
            <div className="bg-white p-6 border border-[#E5E5E5]">
              <h3 className="text-[16px] font-medium text-[#1A1A18] mb-2">ElevenLabs</h3>
              <p className="text-[14px] text-[#6B6B6B] mb-1"><strong>Purpose:</strong> Voice synthesis</p>
              <p className="text-[14px] text-[#6B6B6B]"><strong>Data:</strong> Meditation script text only</p>
            </div>
            
            <div className="bg-white p-6 border border-[#E5E5E5]">
              <h3 className="text-[16px] font-medium text-[#1A1A18] mb-2">RevenueCat</h3>
              <p className="text-[14px] text-[#6B6B6B] mb-1"><strong>Purpose:</strong> Subscription management</p>
              <p className="text-[14px] text-[#6B6B6B]"><strong>Data:</strong> Subscription status, user ID</p>
            </div>
          </div>
          
          <p className="text-[13px] text-[#9E9E9E] mt-4">
            <strong>AI Processing Note:</strong> Anthropic processes data according to their API policies. 
            API inputs are not used for model training, as stated in their documentation.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-6">Your Rights (GDPR)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 border border-[#E5E5E5]">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-5 h-5 text-[#1A1A18]" />
                <h3 className="text-[16px] font-medium text-[#1A1A18]">Access</h3>
              </div>
              <p className="text-[14px] text-[#6B6B6B]">Privacy Center → Export Data</p>
            </div>
            
            <div className="bg-white p-6 border border-[#E5E5E5]">
              <div className="flex items-center gap-3 mb-3">
                <Trash2 className="w-5 h-5 text-[#1A1A18]" />
                <h3 className="text-[16px] font-medium text-[#1A1A18]">Erasure</h3>
              </div>
              <p className="text-[14px] text-[#6B6B6B]">Privacy Center → Delete Account</p>
            </div>
          </div>
          
          <p className="text-[14px] text-[#6B6B6B] mt-6">
            <strong>Response Time:</strong> 30 days for complex requests
          </p>
        </section>

        {/* Security */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Data Security</h2>
          <ul className="space-y-2 text-[14px] text-[#6B6B6B]">
            <li>• <strong>Encryption:</strong> HTTPS (TLS 1.3) for transit, AES-256 at rest</li>
            <li>• <strong>Passwords:</strong> Bcrypt hashed</li>
            <li>• <strong>Access:</strong> Role-based, audit logs</li>
            <li>• <strong>Backups:</strong> Encrypted, 30-day retention</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Children's Privacy</h2>
          <p className="text-[14px] text-[#6B6B6B]">
            Align is not intended for children under 13. We do not knowingly collect data from children under 13.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Contact</h2>
          <div className="bg-white p-6 border border-[#E5E5E5]">
            <p className="text-[14px] text-[#6B6B6B] mb-2">
              <strong>Privacy Contact:</strong>{' '}
              <a href="mailto:support@alignapp.world" className="text-[#1A1A18] underline">
                support@alignapp.world
              </a>
            </p>
            <p className="text-[14px] text-[#6B6B6B]">
              <strong>Response Time:</strong> Within 48 hours
            </p>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center pt-8 border-t border-[#E5E5E5]">
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A18] text-white text-[14px] font-medium hover:bg-[#1A1A18]/90 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A18] py-8">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-[12px] text-white/40">
            © 2026 Align. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;
