import { useEffect } from 'react';

export const MarketingPage = () => {
  useEffect(() => {
    document.title = 'Align - Follow Us';
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <header className="w-full bg-[#1A1A18] py-6">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <a href="/" className="align-wordmark-white text-[24px]">align</a>
          <a 
            href="/support" 
            className="text-[14px] text-white/60 hover:text-white transition-colors"
          >
            Support
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-8 py-24 text-center">
        <h1 className="text-[42px] font-normal text-[#1A1A18] mb-4">follow us</h1>
        <p className="text-[18px] text-[#6B6B6B] mb-16">
          Stay connected with Align.
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://www.tiktok.com/@align___app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A18] text-white text-[14px] font-medium hover:bg-[#1A1A18]/90 transition-colors"
          >
            TikTok
          </a>
          <a 
            href="https://www.instagram.com/align___app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#1A1A18] text-[#1A1A18] text-[14px] hover:bg-[#1A1A18] hover:text-white transition-colors"
          >
            Instagram
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

export default MarketingPage;
