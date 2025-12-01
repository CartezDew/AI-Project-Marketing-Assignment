import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { HouseRulesWidget } from '../components/HouseRulesWidget';
import { CollectionWidget } from '../components/CollectionWidget';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
           {/* Abstract minimalist shapes representing cards and tracks */}
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl mix-blend-multiply"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Play Wild. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Collect Forever.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto font-light">
            The intersection of high-speed chaos and precision die-cast design. 
            Discover the new era of UNO and Hot Wheels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog/teddy">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none shadow-lg shadow-red-500/20">
                Explore UNO
              </Button>
            </Link>
            <Link to="/blog/lesley">
              <Button size="lg" variant="outline" className="border-slate-300 hover:border-slate-900">
                Start Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Split */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* UNO Side */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-slate-100 rounded-3xl mb-6 overflow-hidden relative">
                <img 
                   src="https://picsum.photos/800/600?random=1" 
                   alt="UNO Gameplay" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">The UNO Experience</h2>
              <p className="text-slate-500 mb-4">
                Fast-paced, unpredictable, and endlessly fun. Perfect for the players who love high energy and sudden twists.
              </p>
              <Link to="/blog/teddy" className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-1">
                Read Teddy's Strategy Guide <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Hot Wheels Side */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-slate-100 rounded-3xl mb-6 overflow-hidden relative">
                <img 
                   src="https://picsum.photos/800/600?random=2" 
                   alt="Hot Wheels Collection" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">The Collector's Garage</h2>
              <p className="text-slate-500 mb-4">
                More than just toys. It's about heritage, design, and the hunt for the perfect casting.
              </p>
              <Link to="/blog/lesley" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Read Lesley's Collector Story <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Widgets Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Enhance Your Experience</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Use our intelligent tools to generate new ways to play and display.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <HouseRulesWidget />
            <CollectionWidget />
          </div>
        </div>
      </section>

      {/* Video Embeds */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Featured Community Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden shadow-lg relative group">
                <img src={`https://picsum.photos/400/700?random=${i+10}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Video thumbnail" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium text-sm">Amazing UNO Trickshot #{i}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

