import React, { useState } from 'react';
import { generateHouseRule } from '../services/geminiService';
import { Button } from './Button';

export const HouseRulesWidget: React.FC = () => {
  const [players, setPlayers] = useState('4');
  const [vibe, setVibe] = useState('Chaotic');
  const [rule, setRule] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateHouseRule(players, vibe);
    setRule(result);
    setLoading(false);
  };

  return (
    <div className="bg-red-50 rounded-3xl p-8 md:p-12 border border-red-100 shadow-sm relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative z-10 max-w-lg mx-auto text-center">
        <span className="text-red-600 font-bold tracking-wider text-xs uppercase mb-2 block">AI Powered</span>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">UNO House Rules Generator</h3>
        <p className="text-slate-600 mb-8">
          Bored of the standard rules? Let our AI draft a custom rule to spice up your next game night.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-left">
            <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase">Players</label>
            <select 
              value={players} 
              onChange={(e) => setPlayers(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              <option value="2">2 Players (Duel)</option>
              <option value="4">4 Players (Standard)</option>
              <option value="8">8+ Players (Party)</option>
            </select>
          </div>
          <div className="text-left">
            <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase">Vibe</label>
            <select 
              value={vibe} 
              onChange={(e) => setVibe(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              <option value="Chaotic">Chaotic & Wild</option>
              <option value="Strategic">Strategic & Serious</option>
              <option value="Friendly">Friendly & Chill</option>
              <option value="Fast">Fast Paced</option>
            </select>
          </div>
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white"
        >
          {loading ? 'Consulting the Deck...' : 'Generate House Rule'}
        </Button>

        {rule && (
          <div className="mt-8 p-6 bg-white rounded-xl border border-red-100 shadow-sm animate-fade-in text-left">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white font-bold rounded-lg w-8 h-8 flex items-center justify-center shrink-0">AI</div>
              <div>
                 <p className="text-slate-800 leading-relaxed text-lg">{rule}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

