import { useEffect } from 'react';
import { Mail, MessageCircle, FileText, Shield } from 'lucide-react';

export const SupportPage = () => {
  useEffect(() => {
    document.title = 'Support | Align';
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
        <h1 className="text-[42px] font-normal text-[#1A1A18] mb-4">support</h1>
        <p className="text-[18px] text-[#6B6B6B] mb-16">
          We're here to help you get the most out of your Align practice.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 border border-[#E5E5E5]">
            <Mail className="w-8 h-8 text-[#1A1A18] mb-4" />
            <h2 className="text-[20px] font-medium text-[#1A1A18] mb-2">Email Us</h2>
            <p className="text-[14px] text-[#6B6B6B] mb-4">
              For general inquiries, technical issues, or feedback.
            </p>
            <a 
              href="mailto:support@alignapp.world" 
              className="text-[14px] text-[#1A1A18] underline hover:no-underline"
            >
              support@alignapp.world
            </a>
          </div>

          <div className="bg-white p-8 border border-[#E5E5E5]">
            <MessageCircle className="w-8 h-8 text-[#1A1A18] mb-4" />
            <h2 className="text-[20px] font-medium text-[#1A1A18] mb-2">Privacy Questions</h2>
            <p className="text-[14px] text-[#6B6B6B] mb-4">
              For data requests, deletion, or privacy concerns.
            </p>
            <a 
              href="mailto:support@alignapp.world" 
              className="text-[14px] text-[#1A1A18] underline hover:no-underline"
            >
              support@alignapp.world
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white p-8 border border-[#E5E5E5] mb-16">
          <h2 className="text-[20px] font-medium text-[#1A1A18] mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://cba1a086-75f3-4204-b96a-07b1c1a99fe3-00-3nksespx9q1z9.picard.replit.dev:5000/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#E5E5E5] hover:border-[#1A1A18] transition-colors"
            >
              <Shield className="w-5 h-5 text-[#1A1A18]" />
              <span className="text-[14px] text-[#1A1A18]">Privacy Policy</span>
            </a>
            <a 
              href="https://cba1a086-75f3-4204-b96a-07b1c1a99fe3-00-3nksespx9q1z9.picard.replit.dev:5000/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#E5E5E5] hover:border-[#1A1A18] transition-colors"
            >
              <FileText className="w-5 h-5 text-[#1A1A18]" />
              <span className="text-[14px] text-[#1A1A18]">Terms of Service</span>
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-[24px] font-normal text-[#1A1A18] mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 border border-[#E5E5E5]">
              <h3 className="text-[16px] font-medium text-[#1A1A18] mb-2">How do I cancel my subscription?</h3>
              <p className="text-[14px] text-[#6B6B6B]">
                You can cancel anytime through your App Store or Google Play account settings. 
                Your access continues until the end of your billing period.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E5E5E5]">
              <h3 className="text-[16px] font-medium text-[#1A1A18] mb-2">Do unused meditations roll over?</h3>
              <p className="text-[14px] text-[#6B6B6B]">
                No, your meditation count resets at the start of each billing period. 
                Use them or lose them — a good excuse to practice daily.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E5E5E5]">
              <h3 className="text-[16px] font-medium text-[#1A1A18] mb-2">Can I change my plan?</h3>
              <p className="text-[14px] text-[#6B6B6B]">
                Yes, you can upgrade or downgrade anytime. Changes take effect at your next billing date.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E5E5E5]">
              <h3 className="text-[16px] font-medium text-[#1A1A18] mb-2">How do I delete my account?</h3>
              <p className="text-[14px] text-[#6B6B6B]">
                Go to Settings → Privacy Center → Delete Account in the app, or email us at 
                support@alignapp.world and we'll handle it within 30 days.
              </p>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="text-center py-8 border-t border-[#E5E5E5]">
          <p className="text-[14px] text-[#9E9E9E]">
            We typically respond within 48 hours during business days.
          </p>
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

export default SupportPage;
