import React from 'react';
import { X } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="bg-white p-8 md:p-12 max-w-md w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9E9E9E] hover:text-[#1A1A18] transition-colors"
        >
          <X size={20} strokeWidth={1} />
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <span className="align-wordmark block mb-4">align</span>
          <h3 className="text-[18px] font-normal text-[#1A1A18] mb-2">
            Download the App
          </h3>
          <p className="body-text text-[13px]">
            Scan to install on your device
          </p>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <img 
              src="/qr-code.jpg" 
              alt="QR Code"
              className="w-[160px] h-[160px] mx-auto"
            />
          </div>
          <span className="micro-label">Scan to open</span>
          <a 
            href="https://alignworld.replit.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[12px] text-[#9E9E9E] underline hover:no-underline mt-1"
          >
            or click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
