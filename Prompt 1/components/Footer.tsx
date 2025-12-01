import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 mb-4">MATTEL COLLECTIVE</h3>
            <p className="text-slate-500 max-w-sm">
              Connecting generations through play. From the chaotic fun of UNO to the precision of Hot Wheels collecting.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">UNO Rules</a></li>
              <li><a href="#" className="hover:text-slate-900">Hot Wheels Garage</a></li>
              <li><a href="#" className="hover:text-slate-900">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-400">© 2024 Mattel Marketing Project. Educational Use Only.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             {/* Social icons placeholders */}
             <div className="w-5 h-5 bg-slate-300 rounded-full"></div>
             <div className="w-5 h-5 bg-slate-300 rounded-full"></div>
             <div className="w-5 h-5 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

