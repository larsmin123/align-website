import { useEffect } from 'react';
import { FileText, CreditCard, XCircle, Brain, Scale, Mail } from 'lucide-react';

export const TermsPage = () => {
  useEffect(() => {
    document.title = 'Terms of Service | Align';
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
          <FileText className="w-8 h-8 text-[#1A1A18]" />
          <h1 className="text-[36px] font-normal text-[#1A1A18]">Terms of Service</h1>
        </div>

        <p className="text-[14px] text-[#9E9E9E] mb-12">
          Last Updated: March 22, 2026
        </p>

        {/* Subscription Plans */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-6">Subscription Plans</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-[#E5E5E5]">
                  <th className="text-left py-3 text-[#1A1A18] font-medium">Plan</th>
                  <th className="text-left py-3 text-[#1A1A18] font-medium">Monthly</th>
                  <th className="text-left py-3 text-[#1A1A18] font-medium">Yearly</th>
                  <th className="text-left py-3 text-[#1A1A18] font-medium">Features</th>
                </tr>
              </thead>
              <tbody className="text-[#6B6B6B]">
                <tr className="border-b border-[#E5E5E5]">
                  <td className="py-4 font-medium text-[#1A1A18]">Essential</td>
                  <td className="py-4">$19.99</td>
                  <td className="py-4">$149.99</td>
                  <td className="py-4">3 meditations/month, 3 styles, journaling, insights</td>
                </tr>
                <tr className="border-b border-[#E5E5E5]">
                  <td className="py-4 font-medium text-[#1A1A18]">Pro</td>
                  <td className="py-4">$49.99</td>
                  <td className="py-4">$399.99</td>
                  <td className="py-4">5 meditations/month, 5 styles, journaling, insights</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-[#1A1A18]">Elite</td>
                  <td className="py-4">$99.99</td>
                  <td className="py-4">$799.99</td>
                  <td className="py-4">10 meditations/month, all 8 styles, offline downloads, journaling, insights</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-[16px] font-medium text-[#1A1A18] mb-4">Meditation Styles by Tier</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 border border-[#E5E5E5]">
              <p className="text-[14px] text-[#1A1A18] font-medium mb-2">Essential (3)</p>
              <p className="text-[14px] text-[#6B6B6B]">Deep Transformation · Classic Manifestation · Affirmation Flow</p>
            </div>
            <div className="bg-white p-4 border border-[#E5E5E5]">
              <p className="text-[14px] text-[#1A1A18] font-medium mb-2">Pro (5)</p>
              <p className="text-[14px] text-[#6B6B6B]">All Essential styles + Yoga Nidra · Alpha Method</p>
            </div>
            <div className="bg-white p-4 border border-[#E5E5E5]">
              <p className="text-[14px] text-[#1A1A18] font-medium mb-2">Elite (All 8)</p>
              <p className="text-[14px] text-[#6B6B6B]">All Pro styles + Somatic · Future Self · Sleep Programming</p>
            </div>
          </div>
        </section>

        {/* Billing & Renewal */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Billing & Renewal</h2>
          <div className="bg-white p-6 border border-[#E5E5E5]">
            <ul className="space-y-3 text-[14px] text-[#6B6B6B]">
              <li className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-[#1A1A18] mt-0.5 flex-shrink-0" />
                <span>Subscriptions automatically renew unless cancelled 24 hours before renewal</span>
              </li>
              <li className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-[#1A1A18] mt-0.5 flex-shrink-0" />
                <span>Payment charged to Apple/Google account at confirmation</span>
              </li>
              <li className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-[#1A1A18] mt-0.5 flex-shrink-0" />
                <span>Manage subscriptions in Account Settings</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-[#1A1A18] mt-0.5 flex-shrink-0" />
                <span>No refunds for partial months</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Cancellation */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Cancellation</h2>
          <div className="bg-white p-6 border border-[#E5E5E5]">
            <ul className="space-y-2 text-[14px] text-[#6B6B6B]">
              <li>• Cancel anytime through App Store/Play Store</li>
              <li>• Access continues until end of billing period</li>
              <li>• Account deletion available in Privacy Center</li>
            </ul>
          </div>
        </section>

        {/* AI-Generated Content */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">AI-Generated Content</h2>
          <div className="bg-white p-6 border border-[#E5E5E5]">
            <div className="flex items-start gap-3 mb-4">
              <Brain className="w-5 h-5 text-[#1A1A18] mt-0.5 flex-shrink-0" />
              <p className="text-[14px] text-[#6B6B6B]">
                Meditations are generated using AI (Anthropic Claude) based on your inputs. 
                Content is for personal wellness purposes only and not a substitute for 
                professional medical or therapeutic advice.
              </p>
            </div>
          </div>
        </section>

        {/* Acceptable Use */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Acceptable Use</h2>
          <p className="text-[14px] text-[#6B6B6B] mb-4">You agree not to:</p>
          <ul className="space-y-2 text-[14px] text-[#6B6B6B]">
            <li>• Resell or redistribute content</li>
            <li>• Use for unlawful purposes</li>
            <li>• Attempt to access other users' accounts</li>
            <li>• Reverse engineer the app</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Limitation of Liability</h2>
          <div className="bg-white p-6 border border-[#E5E5E5]">
            <p className="text-[14px] text-[#6B6B6B] mb-4">
              Align is provided "as is" without warranties. We are not liable for damages 
              arising from app use.
            </p>
            <p className="text-[14px] text-[#6B6B6B]">
              <strong>Maximum liability</strong> is limited to amount paid in past 12 months.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Governing Law</h2>
          <div className="flex items-start gap-3 bg-white p-6 border border-[#E5E5E5]">
            <Scale className="w-5 h-5 text-[#1A1A18] mt-0.5 flex-shrink-0" />
            <p className="text-[14px] text-[#6B6B6B]">
              These terms are governed by the laws of the Netherlands. 
              Disputes subject to courts of Rotterdam.
            </p>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Changes to Terms</h2>
          <p className="text-[14px] text-[#6B6B6B]">
            We may modify these terms with 30 days notice. Continued use constitutes acceptance.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-4">Contact</h2>
          <div className="bg-white p-6 border border-[#E5E5E5]">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#1A1A18]" />
              <a href="mailto:support@alignapp.world" className="text-[14px] text-[#1A1A18] underline">
                support@alignapp.world
              </a>
            </div>
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

export default TermsPage;
