import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, CheckCircle2, XCircle, Edit3, Globe, Users, Lock, ChevronRight } from 'lucide-react';

export default function CreateOffering() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [rawInput, setRawInput] = useState('');
  
  // Simulated AI state
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [finalDescription, setFinalDescription] = useState('');
  
  const [accessLevel, setAccessLevel] = useState('guided');

  const handleGenerateAI = () => {
    setIsGenerating(true);
    // Simulate AI delay
    setTimeout(() => {
      setAiSuggestion(`Experience the ancient art of our loom weaving. Passed down through six generations, this intricate process involves natural dyeing and hand-knotting techniques that tell the story of our ancestors. Join us for a hands-on session where you will learn the basics and take home a small piece of our heritage.`);
      setIsGenerating(false);
      setStep(2);
    }, 1500);
  };

  const handlePublish = () => {
    navigate('/custodian/dashboard');
  };

  return (
    <div className="container py-8 max-w-3xl mx-auto animate-fade-in">
      <div className="flex items-center gap-2 mb-8 text-small font-medium">
        <span className={step >= 1 ? 'text-primary' : 'text-muted'}>1. Basic Details</span>
        <ChevronRight className="w-4 h-4 text-muted" />
        <span className={step >= 2 ? 'text-primary' : 'text-muted'}>2. AI Framing Review</span>
        <ChevronRight className="w-4 h-4 text-muted" />
        <span className={step >= 3 ? 'text-primary' : 'text-muted'}>3. Access Control</span>
      </div>

      <h1 className="text-h2 mb-6">Create New Offering</h1>

      {step === 1 && (
        <div className="card animate-fade-in">
          <div className="form-group">
            <label className="form-label">What are you sharing?</label>
            <input type="text" className="form-input" placeholder="e.g., Traditional Loom Weaving" />
          </div>
          
          <div className="form-group mt-4">
            <label className="form-label mb-2">Tell us about it in your own words</label>
            <p className="text-small text-muted mb-2">
              Write or speak a rough description. Our AI will help translate and structure it for visitors, but you will review it next.
            </p>
            <textarea 
              className="form-textarea" 
              placeholder="It's an old weaving technique from my grandfather. Uses natural dyes. Takes 3 hours to show."
              value={rawInput}
              onChange={(e) => setRawInput(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-6 flex justify-end">
            <button 
              className="btn btn-primary" 
              onClick={handleGenerateAI}
              disabled={isGenerating || rawInput.length < 5}
            >
              {isGenerating ? 'AI is drafting...' : (
                <>
                  <Sparkles className="w-4 h-4" /> Help me frame this
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in">
          <div className="glass-card mb-6 border-accent-gold border-opacity-30">
            <div className="flex items-center gap-2 mb-4 text-accent-gold">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-medium">AI Suggested Framing</h3>
            </div>
            
            <p className="text-body mb-6 p-4 bg-white rounded-md border border-color-border">
              {aiSuggestion}
            </p>

            <div className="flex items-start gap-3 mb-6 p-3 bg-red-50 rounded-md text-red-800 text-small">
              <Shield className="w-5 h-5 flex-shrink-0" />
              <p><strong>Custodian Veto Power:</strong> You have full control. Do not approve this if it misrepresents your culture or reveals restricted knowledge.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="btn btn-outline border-green-600 text-green-700 hover:bg-green-50" onClick={() => { setFinalDescription(aiSuggestion); setStep(3); }}>
                <CheckCircle2 className="w-4 h-4" /> Approve
              </button>
              <button className="btn btn-outline" onClick={() => { setFinalDescription(aiSuggestion); /* normally open edit modal */ setStep(3); }}>
                <Edit3 className="w-4 h-4" /> Edit Text
              </button>
              <button className="btn btn-ghost text-red-600 hover:bg-red-50" onClick={() => setStep(1)}>
                <XCircle className="w-4 h-4" /> Reject & Restart
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in">
          <div className="card mb-6">
            <h3 className="text-h3 mb-4">Set Access Level</h3>
            <p className="text-small text-muted mb-6">
              Who is allowed to view or book this offering? You can change this at any time.
            </p>

            <div className="space-y-4">
              <label className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${accessLevel === 'open' ? 'border-access-open bg-[rgba(78,124,89,0.05)]' : 'border-color-border hover:border-gray-300'}`}>
                <div className="flex items-center gap-3 mb-1">
                  <input type="radio" name="access" checked={accessLevel === 'open'} onChange={() => setAccessLevel('open')} className="w-4 h-4 text-access-open" />
                  <Globe className="w-5 h-5 text-access-open" />
                  <span className="font-semibold text-access-open">Open Access</span>
                </div>
                <p className="text-small text-muted ml-8">Anyone can discover and view this offering. Best for crafts and public performances.</p>
              </label>

              <label className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${accessLevel === 'guided' ? 'border-access-guided bg-[rgba(203,163,101,0.05)]' : 'border-color-border hover:border-gray-300'}`}>
                <div className="flex items-center gap-3 mb-1">
                  <input type="radio" name="access" checked={accessLevel === 'guided'} onChange={() => setAccessLevel('guided')} className="w-4 h-4 text-access-guided" />
                  <Users className="w-5 h-5 text-access-guided" />
                  <span className="font-semibold text-access-guided">Guided Context</span>
                </div>
                <p className="text-small text-muted ml-8">Requires booking or speaking with a custodian to access. Best for complex rituals or stories needing proper context.</p>
              </label>

              <label className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${accessLevel === 'restricted' ? 'border-access-restricted bg-[rgba(163,74,63,0.05)]' : 'border-color-border hover:border-gray-300'}`}>
                <div className="flex items-center gap-3 mb-1">
                  <input type="radio" name="access" checked={accessLevel === 'restricted'} onChange={() => setAccessLevel('restricted')} className="w-4 h-4 text-access-restricted" />
                  <Lock className="w-5 h-5 text-access-restricted" />
                  <span className="font-semibold text-access-restricted">Restricted</span>
                </div>
                <p className="text-small text-muted ml-8">Hidden from the public. Only accessible to community members or verified researchers.</p>
              </label>
            </div>
            
            <div className="mt-8 border-t border-color-border pt-6 flex justify-between items-center">
              <div className="form-group mb-0">
                <label className="form-label">Price (Direct UPI)</label>
                <div className="flex items-center gap-2">
                  <span className="text-muted">₹</span>
                  <input type="number" className="form-input w-32" defaultValue="500" />
                </div>
              </div>
              
              <button className="btn btn-primary" onClick={handlePublish}>Publish Offering</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
