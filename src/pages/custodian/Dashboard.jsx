import { Link } from 'react-router-dom';
import { Plus, Wallet, Shield, Eye, Lock, Users } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex flex-wrap justify-between items-end mb-8 gap-4">
        <div>
          <h1 className="text-h2 mb-1">Welcome, Master Weaver</h1>
          <p className="text-muted">Community Status: <span className="text-access-open font-medium">Verified</span></p>
        </div>
        <Link to="/custodian/new" className="btn btn-primary">
          <Plus className="w-4 h-4" />
          New Offering
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Earnings Card */}
        <div className="card bg-[rgba(142,90,53,0.05)] border-primary border-opacity-20">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <Wallet className="w-5 h-5" />
            <h3 className="font-semibold">Direct Earnings</h3>
          </div>
          <div className="text-title mb-1 text-gradient">₹12,450</div>
          <p className="text-small text-muted mb-4">Paid directly via UPI this month</p>
          <button className="btn btn-outline btn-sm w-full bg-white">View Ledger</button>
        </div>

        {/* Control Card */}
        <div className="card">
          <div className="flex items-center gap-3 mb-4 text-secondary">
            <Shield className="w-5 h-5" />
            <h3 className="font-semibold">Your Control</h3>
          </div>
          <ul className="text-small space-y-3">
            <li className="flex justify-between border-b pb-2">
              <span className="text-muted">Total Offerings</span>
              <strong>3</strong>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span className="text-muted">Pending AI Reviews</span>
              <strong className="text-accent-red">1</strong>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-h3 mb-4">Your Offerings</h2>
      
      <div className="flex flex-col gap-4">
        {/* Offering 1 */}
        <div className="card flex flex-wrap gap-6 items-center justify-between card-hover">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
               {/* Placeholder for image */}
               <div className="w-full h-full bg-[#8E5A35] opacity-20"></div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Traditional Loom Weaving Setup</h3>
              <div className="flex items-center gap-2">
                <span className="badge badge-guided">
                  <Users className="w-3 h-3" /> Guided
                </span>
                <span className="text-small text-muted">• ₹500 per booking</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm">Edit Framing</button>
          </div>
        </div>

        {/* Offering 2 */}
        <div className="card flex flex-wrap gap-6 items-center justify-between card-hover">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
               <div className="w-full h-full bg-[#2C4336] opacity-20"></div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Sacred Thread Ritual</h3>
              <div className="flex items-center gap-2">
                <span className="badge badge-restricted">
                  <Lock className="w-3 h-3" /> Restricted
                </span>
                <span className="text-small text-muted">• Community Only</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm">Edit Framing</button>
          </div>
        </div>
      </div>
    </div>
  );
}
