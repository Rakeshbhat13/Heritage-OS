import { Link } from 'react-router-dom';
import { ArrowLeft, Users, ShieldCheck, Calendar, Clock, MapPin } from 'lucide-react';

export default function OfferingDetails() {
  return (
    <div className="container py-8 max-w-4xl mx-auto animate-fade-in">
      <Link to="/explore" className="inline-flex items-center gap-2 text-muted hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Explore
      </Link>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="w-full h-64 bg-[#8E5A35] bg-opacity-20 rounded-xl mb-6"></div>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="badge badge-guided">
              <Users className="w-3 h-3" /> Guided Context
            </span>
            <span className="text-small text-muted flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Bhuj, Gujarat
            </span>
          </div>

          <h1 className="text-h1 mb-4">Traditional Loom Weaving</h1>
          
          <div className="glass-card mb-8 border-access-guided border-opacity-30">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-access-guided" />
              Custodian's Note
            </h3>
            <p className="text-small text-muted">
              "We ask that visitors do not take photographs of the inner sanctum where the natural dyes are prepared. This is a guided experience because understanding the story of the threads is as important as the weaving itself."
            </p>
          </div>

          <div className="prose mb-8">
            <h3 className="text-h3 mb-3">About the Experience</h3>
            <p className="text-body text-muted mb-4">
              Experience the ancient art of our loom weaving. Passed down through six generations, this intricate process involves natural dyeing and hand-knotting techniques that tell the story of our ancestors.
            </p>
            <p className="text-body text-muted">
              Join us for a hands-on session where you will learn the basics and take home a small piece of our heritage. You will sit directly with Master Weaver and listen to the oral traditions that accompany the craft.
            </p>
          </div>
        </div>

        <div>
          <div className="card sticky top-24">
            <div className="mb-4">
              <span className="text-h2">₹500</span>
              <span className="text-muted"> / person</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-small">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">Availability</div>
                  <div className="text-muted">Mon - Sat (Require 1 day notice)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-small">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">Duration</div>
                  <div className="text-muted">3 Hours</div>
                </div>
              </div>
            </div>

            <Link to="/checkout" className="btn btn-primary w-full">Request to Book</Link>
            
            <p className="text-xs text-center text-muted mt-4">
              100% of your payment goes directly to the custodian via UPI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
