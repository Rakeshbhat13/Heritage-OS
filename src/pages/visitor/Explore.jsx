import { Link } from 'react-router-dom';
import { Search, MapPin, Users, Globe } from 'lucide-react';

export default function Explore() {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-h1 mb-4">Discover Living Heritage</h1>
        <p className="text-muted">Explore authentic cultural experiences, hosted directly by their custodians.</p>
        
        <div className="mt-6 flex max-w-md mx-auto relative">
          <input 
            type="text" 
            className="form-input pl-10 rounded-full" 
            placeholder="Search crafts, rituals, places..." 
          />
          <Search className="w-5 h-5 text-muted absolute left-4 top-3" />
        </div>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto hide-scrollbar pb-2">
        <button className="btn btn-outline btn-sm whitespace-nowrap bg-white">All Experiences</button>
        <button className="btn btn-outline btn-sm whitespace-nowrap">
          <Globe className="w-4 h-4 text-access-open" /> Open Access
        </button>
        <button className="btn btn-outline btn-sm whitespace-nowrap">
          <Users className="w-4 h-4 text-access-guided" /> Guided Context
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Link to="/offering/1" className="card p-0 overflow-hidden card-hover block group">
          <div className="h-48 bg-[#8E5A35] bg-opacity-20 flex items-center justify-center relative">
            <span className="badge badge-guided absolute top-4 left-4 bg-white">
              <Users className="w-3 h-3" /> Guided
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Traditional Loom Weaving</h3>
            <p className="text-small text-muted flex items-center gap-1 mb-3">
              <MapPin className="w-3 h-3" /> Bhuj, Gujarat
            </p>
            <p className="text-small line-clamp-2 mb-4">
              Experience the ancient art of our loom weaving. Passed down through six generations, this intricate process involves natural dyeing...
            </p>
            <div className="flex items-center justify-between border-t border-color-border pt-4">
              <span className="font-semibold">₹500 <span className="text-small font-normal text-muted">/ person</span></span>
              <span className="text-small text-primary font-medium">Hosted by Master Weaver</span>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/offering/2" className="card p-0 overflow-hidden card-hover block group">
          <div className="h-48 bg-[#2C4336] bg-opacity-20 flex items-center justify-center relative">
            <span className="badge badge-open absolute top-4 left-4 bg-white">
              <Globe className="w-3 h-3" /> Open
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Blue Pottery Workshop</h3>
            <p className="text-small text-muted flex items-center gap-1 mb-3">
              <MapPin className="w-3 h-3" /> Jaipur, Rajasthan
            </p>
            <p className="text-small line-clamp-2 mb-4">
              Learn the delicate art of making blue pottery from the original artisan family. You will mold your own small bowl.
            </p>
            <div className="flex items-center justify-between border-t border-color-border pt-4">
              <span className="font-semibold">₹1,200 <span className="text-small font-normal text-muted">/ person</span></span>
              <span className="text-small text-primary font-medium">Hosted by Artisan K.</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
