import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Smartphone } from 'lucide-react';

export default function Checkout() {
  const [status, setStatus] = useState('pending'); // pending, processing, success

  const handlePayment = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className="container py-16 text-center max-w-md mx-auto animate-fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-h2 mb-2">Booking Confirmed!</h1>
        <p className="text-muted mb-8">
          Your payment of ₹1,000 has been sent directly to the Master Weaver's UPI account.
        </p>
        <div className="card p-6 bg-gray-50 border-dashed mb-8 text-left">
          <h3 className="font-semibold mb-4 border-b pb-2">Booking Details</h3>
          <p className="text-small mb-2"><span className="text-muted w-24 inline-block">Experience:</span> Traditional Loom Weaving</p>
          <p className="text-small mb-2"><span className="text-muted w-24 inline-block">Date:</span> Oct 12, 2026</p>
          <p className="text-small"><span className="text-muted w-24 inline-block">Guests:</span> 2 Adults</p>
        </div>
        <Link to="/explore" className="btn btn-primary w-full">Return to Explore</Link>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-lg mx-auto animate-fade-in">
      <Link to="/offering/1" className="inline-flex items-center gap-2 text-muted hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <h1 className="text-h2 mb-6">Complete Your Booking</h1>

      <div className="card mb-6 bg-primary bg-opacity-5 border-primary border-opacity-20">
        <h3 className="font-medium text-primary mb-2 flex items-center gap-2">
          <Smartphone className="w-5 h-5" />
          Direct Custodian Payment
        </h3>
        <p className="text-small text-muted">
          Unlike traditional platforms, Heritage OS does not take a cut from experiences. Your payment will be transferred directly to the custodian's bank account via UPI.
        </p>
      </div>

      <div className="card mb-8">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h3 className="font-bold">Traditional Loom Weaving</h3>
            <p className="text-small text-muted">2 Guests x ₹500</p>
          </div>
          <span className="font-semibold text-lg">₹1,000</span>
        </div>
        
        <div className="form-group mb-6">
          <label className="form-label">Your UPI ID (For Verification)</label>
          <input type="text" className="form-input" placeholder="you@okhdfcbank" />
        </div>

        <button 
          className="btn btn-primary w-full py-4 text-lg"
          onClick={handlePayment}
          disabled={status === 'processing'}
        >
          {status === 'processing' ? 'Processing Transfer...' : 'Pay ₹1,000 via UPI'}
        </button>
      </div>
    </div>
  );
}
