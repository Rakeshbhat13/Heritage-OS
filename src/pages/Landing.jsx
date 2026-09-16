import { Link } from 'react-router-dom';
import { Shield, Sparkles, Map } from 'lucide-react';

export default function Landing() {
  return (
    <div className="container py-12 animate-fade-in">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-title mb-4">Culture on <span className="text-gradient">Its Own Terms</span></h1>
        <p className="text-h3 text-muted mb-8">
          A digital system that puts cultural custodians at the center. 
          You decide what is shared, how it's framed, and who has access.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Custodian Path */}
        <div className="card flex-col items-center text-center p-8">
          <div className="w-16 h-16 rounded-full bg-[rgba(142,90,53,0.1)] text-primary flex items-center justify-center mb-6 mx-auto">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-h2 mb-2">I am a Custodian</h2>
          <p className="text-muted mb-6">
            Register to protect and share your culture. Set access levels and earn directly.
          </p>
          <Link to="/custodian/register" className="btn btn-primary w-full">Register & Control</Link>
        </div>

        {/* Visitor Path */}
        <div className="card flex-col items-center text-center p-8">
          <div className="w-16 h-16 rounded-full bg-[rgba(44,67,54,0.1)] text-secondary flex items-center justify-center mb-6 mx-auto">
            <Map className="w-8 h-8" />
          </div>
          <h2 className="text-h2 mb-2">I am a Visitor</h2>
          <p className="text-muted mb-6">
            Discover authentic experiences directly guided and framed by local custodians.
          </p>
          <Link to="/explore" className="btn btn-secondary w-full">Explore Culture</Link>
        </div>
      </div>
      
      <div className="mt-16 text-center max-w-2xl mx-auto p-6 glass-card">
        <Sparkles className="w-6 h-6 text-accent-gold mx-auto mb-4" />
        <h3 className="text-h3 mb-2">Custodian-First AI</h3>
        <p className="text-muted text-small">
          Our AI helps translate and describe, but the <strong>Custodian has the final say</strong>. 
          Nothing goes live without your approval.
        </p>
      </div>
    </div>
  );
}
