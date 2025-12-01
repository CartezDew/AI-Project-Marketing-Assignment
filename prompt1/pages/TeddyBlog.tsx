import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const TeddyBlog: React.FC = () => {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 mb-12">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
          Strategy Guide
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Mastering the Chaos: How to Win at UNO Every Single Time
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
            <img src="https://picsum.photos/100/100?random=50" alt="Teddy" />
          </div>
          <div>
            <p className="font-medium text-slate-900">By Teddy</p>
            <p>10 min read • Updated today</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-xl">
           <img src="https://picsum.photos/1200/675?random=5" className="w-full h-full object-cover" alt="UNO Cards Spread" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-red-600">
        <p className="lead text-xl text-slate-600 mb-8">
          You think UNO is just about luck? Think again. It's about psychological warfare, timing, and knowing exactly when to drop that Wild Draw 4.
        </p>
        
        <h2>The "Quiet" Game</h2>
        <p>
          Most people play UNO loud. They shout when they get a skip. They laugh when they reverse. 
          But the real pros? We play quiet. We watch. 
          When you see someone with one card left, don't just panic. 
          Check the discard pile. Calculate the colors.
        </p>

        <div className="my-10 p-8 bg-yellow-50 rounded-2xl border-l-4 border-yellow-400">
          <h4 className="text-yellow-800 font-bold m-0 mb-2">Pro Tip: Holding the Wild</h4>
          <p className="m-0 text-yellow-800/80">
            Never play your Wild card early unless you have to. It's your escape hatch. Your lifeline. Save it for the moment you need to change the flow.
          </p>
        </div>

        <h2>House Rules That Change Everything</h2>
        <p>
          Standard rules are cool, but have you tried "Stacking"? If someone throws a Draw 2, throw another Draw 2 on top. 
          The next person has to draw 4. It creates instant chaos and huge laughs. 
          Use our <Link to="/">House Rules Generator</Link> to find more crazy modes.
        </p>

        <p>
          UNO isn't just a card game; it's a test of friendship. And if you follow this guide, 
          you'll be the one standing tall when the dust settles.
        </p>
        
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <h3 className="mb-4">Ready to test your skills?</h3>
          <Link to="/">
            <Button className="bg-red-600 text-white hover:bg-red-700">Generate a Challenge</Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

