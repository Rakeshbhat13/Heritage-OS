import { useNavigate } from 'react-router-dom';
import { Mic, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate community verification delay then redirect
    navigate('/custodian/dashboard');
  };

  return (
    <div className="container py-8 max-w-lg mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-h2 mb-2">Custodian Registration</h1>
        <p className="text-muted text-small">
          Register to protect your culture. Your identity will be verified by the local community board to ensure authenticity.
        </p>
      </div>

      <div className="card">
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label className="form-label">Full Name / Title</label>
            <input type="text" className="form-input" placeholder="e.g., Elder Thomas or Master Weaver Siti" required />
          </div>
          
          <div className="form-group">
            <label className="form-label">Community / Lineage</label>
            <input type="text" className="form-input" placeholder="e.g., The Blue Pottery Guild" required />
          </div>

          <div className="form-group mt-6">
            <label className="form-label mb-2">Voice Introduction (Optional)</label>
            <p className="text-small text-muted mb-4">
              Speak your introduction. Our system works easily with voice for those who prefer not to type.
            </p>
            
            <button 
              type="button"
              className={`w-full py-8 border-2 border-dashed rounded-lg flex flex-col items-center justify-center transition-all ${isRecording ? 'border-primary bg-[rgba(142,90,53,0.05)]' : 'border-color-border hover:border-primary'}`}
              onClick={() => setIsRecording(!isRecording)}
            >
              <div className={isRecording ? 'voice-pulse' : ''}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isRecording ? 'bg-primary text-white' : 'bg-[rgba(142,90,53,0.1)] text-primary'}`}>
                  <Mic className="w-8 h-8" />
                </div>
              </div>
              <span className="mt-4 font-medium">
                {isRecording ? 'Listening... Tap to stop' : 'Tap to Record Introduction'}
              </span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-color-border">
            <div className="flex gap-3 mb-6 items-start">
              <ShieldCheck className="w-5 h-5 text-access-open flex-shrink-0 mt-0.5" />
              <p className="text-small text-muted">
                By registering, you retain full rights to all cultural knowledge shared on this platform.
              </p>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Submit for Verification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
