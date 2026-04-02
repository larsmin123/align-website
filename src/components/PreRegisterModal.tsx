import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PreRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreRegisterModal: React.FC<PreRegisterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || 'Er ging iets mis.');
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch {
      setErrorMessage('Kan geen verbinding maken. Probeer opnieuw.');
      setStatus('error');
    }
  };

  const handleClose = () => {
    setEmail('');
    setStatus('idle');
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="bg-white p-8 md:p-12 max-w-md w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#9E9E9E] hover:text-[#1A1A18] transition-colors"
        >
          <X size={20} strokeWidth={1} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-4">
            <span className="align-wordmark block mb-6">align</span>
            <p className="body-text text-[15px] mb-2">Je staat op de lijst.</p>
            <p className="body-text text-[13px] text-[#9E9E9E]">
              We laten het je weten zodra de app beschikbaar is.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <span className="align-wordmark block mb-4">align</span>
              <h3 className="text-[18px] font-normal text-[#1A1A18] mb-2">
                Pre-register
              </h3>
              <p className="body-text text-[13px]">
                Laat je e-mailadres achter en wij laten je als eerste weten wanneer de app live gaat.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.com"
                required
                disabled={status === 'loading'}
                className="w-full border border-[#E0E0E0] px-4 py-3 text-[13px] font-light text-[#1A1A18] placeholder-[#9E9E9E] outline-none focus:border-[#1A1A18] transition-colors mb-3 disabled:opacity-50"
              />

              {status === 'error' && (
                <p className="text-[12px] text-red-500 mb-3">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-scientific w-full disabled:opacity-50"
              >
                {status === 'loading' ? 'Bezig...' : 'Registreer mij'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PreRegisterModal;
