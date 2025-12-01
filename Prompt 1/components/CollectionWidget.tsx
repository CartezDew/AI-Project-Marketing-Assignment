import React, { useState } from 'react';
import { generateDisplayIdea } from '../services/geminiService';
import { Button } from './Button';

export const CollectionWidget: React.FC = () => {
  const [carCount, setCarCount] = useState('50');
  const [space, setSpace] = useState('Wall');
  const [idea, setIdea] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateDisplayIdea(carCount, space);
    setIdea(result);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
      
      <div className="relative z-10 max-w-lg mx-auto">
        <span className="text-blue-400 font-bold tracking-wider text-xs uppercase mb-2 block">Curator Tool</span>
        <h3 className="text-3xl font-bold mb-4">Display Inspiration</h3>
        <p className="text-slate-300 mb-8">
          Maximize your space. Get tailored advice on how to showcase your Hot Wheels collection professionally.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
           <div className="text-left">
            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">Collection Size</label>
            <select 
              value={carCount} 
              onChange={(e) => setCarCount(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="10">Starter (10-20 cars)</option>
              <option value="50">Growing (50-100 cars)</option>
              <option value="500">Expert (500+ cars)</option>
            </select>
          </div>
          <div className="text-left">
             <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">Space</label>
            <select 
              value={space} 
              onChange={(e) => setSpace(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Wall">Empty Wall</option>
              <option value="Shelf">Bookshelf</option>
              <option value="Desk">Desktop / Office</option>
            </select>
          </div>
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={loading}
          variant="secondary"
          className="w-full"
        >
          {loading ? 'Designing...' : 'Get Design Idea'}
        </Button>

         {idea && (
          <div className="mt-8 p-6 bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 animate-fade-in">
             <p className="text-slate-200 leading-relaxed italic border-l-2 border-blue-500 pl-4">{idea}</p>
          </div>
        )}
      </div>
    </div>
  );
};

