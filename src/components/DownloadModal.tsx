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

        {/* QR Codes */}
        <div className="flex justify-center gap-8">
          {/* App Store */}
          <div className="text-center">
            <div className="qr-placeholder mb-3">
              <svg viewBox="0 0 100 100" className="w-[120px] h-[120px]">
                {/* QR Code pattern for App Store */}
                <rect x="10" y="10" width="25" height="25" fill="#1A1A18"/>
                <rect x="65" y="10" width="25" height="25" fill="#1A1A18"/>
                <rect x="10" y="65" width="25" height="25" fill="#1A1A18"/>
                <rect x="15" y="15" width="15" height="15" fill="white"/>
                <rect x="70" y="15" width="15" height="15" fill="white"/>
                <rect x="15" y="70" width="15" height="15" fill="white"/>
                <rect x="18" y="18" width="9" height="9" fill="#1A1A18"/>
                <rect x="73" y="18" width="9" height="9" fill="#1A1A18"/>
                <rect x="18" y="73" width="9" height="9" fill="#1A1A18"/>
                {/* Data modules */}
                <rect x="40" y="10" width="5" height="5" fill="#1A1A18"/>
                <rect x="50" y="10" width="5" height="5" fill="#1A1A18"/>
                <rect x="40" y="20" width="5" height="5" fill="#1A1A18"/>
                <rect x="45" y="25" width="5" height="5" fill="#1A1A18"/>
                <rect x="55" y="20" width="5" height="5" fill="#1A1A18"/>
                <rect x="10" y="40" width="5" height="5" fill="#1A1A18"/>
                <rect x="20" y="45" width="5" height="5" fill="#1A1A18"/>
                <rect x="25" y="40" width="5" height="5" fill="#1A1A18"/>
                <rect x="40" y="40" width="20" height="20" fill="#1A1A18"/>
                <rect x="45" y="45" width="10" height="10" fill="white"/>
                <rect x="48" y="48" width="4" height="4" fill="#1A1A18"/>
                <rect x="65" y="40" width="5" height="5" fill="#1A1A18"/>
                <rect x="75" y="45" width="5" height="5" fill="#1A1A18"/>
                <rect x="80" y="50" width="5" height="5" fill="#1A1A18"/>
                <rect x="85" y="40" width="5" height="5" fill="#1A1A18"/>
                <rect x="40" y="65" width="5" height="5" fill="#1A1A18"/>
                <rect x="50" y="70" width="5" height="5" fill="#1A1A18"/>
                <rect x="55" y="75" width="5" height="5" fill="#1A1A18"/>
                <rect x="45" y="80" width="5" height="5" fill="#1A1A18"/>
                <rect x="65" y="65" width="25" height="25" fill="#1A1A18"/>
                <rect x="70" y="70" width="15" height="15" fill="white"/>
                <rect x="73" y="73" width="9" height="9" fill="#1A1A18"/>
                <rect x="76" y="76" width="3" height="3" fill="white"/>
              </svg>
            </div>
            <span className="micro-label">App Store</span>
          </div>

          {/* Play Store */}
          <div className="text-center">
            <div className="qr-placeholder mb-3">
              <svg viewBox="0 0 100 100" className="w-[120px] h-[120px]">
                {/* QR Code pattern for Play Store */}
                <rect x="10" y="10" width="25" height="25" fill="#1A1A18"/>
                <rect x="65" y="10" width="25" height="25" fill="#1A1A18"/>
                <rect x="10" y="65" width="25" height="25" fill="#1A1A18"/>
                <rect x="15" y="15" width="15" height="15" fill="white"/>
                <rect x="70" y="15" width="15" height="15" fill="white"/>
                <rect x="15" y="70" width="15" height="15" fill="white"/>
                <rect x="18" y="18" width="9" height="9" fill="#1A1A18"/>
                <rect x="73" y="18" width="9" height="9" fill="#1A1A18"/>
                <rect x="18" y="73" width="9" height="9" fill="#1A1A18"/>
                {/* Different data modules for Play Store */}
                <rect x="40" y="10" width="5" height="5" fill="#1A1A18"/>
                <rect x="55" y="15" width="5" height="5" fill="#1A1A18"/>
                <rect x="45" y="20" width="5" height="5" fill="#1A1A18"/>
                <rect x="50" y="25" width="5" height="5" fill="#1A1A18"/>
                <rect x="40" y="30" width="5" height="5" fill="#1A1A18"/>
                <rect x="10" y="40" width="5" height="5" fill="#1A1A18"/>
                <rect x="25" y="45" width="5" height="5" fill="#1A1A18"/>
                <rect x="15" y="50" width="5" height="5" fill="#1A1A18"/>
                <rect x="40" y="40" width="20" height="20" fill="#1A1A18"/>
                <rect x="45" y="45" width="10" height="10" fill="white"/>
                <rect x="48" y="48" width="4" height="4" fill="#1A1A18"/>
                <rect x="70" y="40" width="5" height="5" fill="#1A1A18"/>
                <rect x="80" y="45" width="5" height="5" fill="#1A1A18"/>
                <rect x="75" y="55" width="5" height="5" fill="#1A1A18"/>
                <rect x="85" y="50" width="5" height="5" fill="#1A1A18"/>
                <rect x="45" y="65" width="5" height="5" fill="#1A1A18"/>
                <rect x="55" y="70" width="5" height="5" fill="#1A1A18"/>
                <rect x="40" y="75" width="5" height="5" fill="#1A1A18"/>
                <rect x="50" y="80" width="5" height="5" fill="#1A1A18"/>
                <rect x="65" y="65" width="25" height="25" fill="#1A1A18"/>
                <rect x="70" y="70" width="15" height="15" fill="white"/>
                <rect x="73" y="73" width="9" height="9" fill="#1A1A18"/>
                <rect x="76" y="76" width="3" height="3" fill="white"/>
              </svg>
            </div>
            <span className="micro-label">Play Store</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
