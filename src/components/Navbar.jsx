import { Link } from 'react-router-dom';
import { Compass, UserCircle2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass-card !rounded-none !border-t-0 !border-l-0 !border-r-0 !py-4 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <Compass className="w-6 h-6" />
          <span className="text-h3 font-semibold text-gradient">Heritage OS</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/explore" className="btn btn-ghost btn-sm">Explore</Link>
          <Link to="/custodian/dashboard" className="btn btn-outline btn-sm">
            <UserCircle2 className="w-4 h-4" />
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
