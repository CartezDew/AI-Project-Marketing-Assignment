import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const LesleyBlog: React.FC = () => {
  return (
    <article className="min-h-screen bg-slate-50 pt-32 pb-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 mb-12 text-center">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
          Collector Stories
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          The Art of the Hunt: Why I Still Check the Pegs at 29
        </h1>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
          <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
             <img src="https://picsum.photos/100/100?random=51" alt="Lesley" />
          </div>
          <div className="text-left">
            <p className="font-medium text-slate-900">By Lesley</p>
            <p>8 min read • The Nostalgia Series</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="aspect-[21/9] bg-white rounded-3xl overflow-hidden shadow-sm">
          <img src="https://picsum.photos/1600/600?random=6" className="w-full h-full object-cover" alt="Hot Wheels Display Shelf" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600">
        <p className="lead text-xl text-slate-600 mb-8 font-serif italic">
          There’s a specific sound a Hot Wheels card makes when you slide it on the peg. 
          It’s a subtle *swish* that takes me back to 1999.
        </p>
        
        <h2>More Than Just Die-Cast</h2>
        <p>
          Collecting isn't hoarding. It's curation. It's about finding that one casting—the '83 Silverado, 
          the Porsche 911 GT3—that speaks to your aesthetic. 
          I treat my collection like art pieces. They aren't tossed in a bin; they are displayed on floating shelves, 
          color-coordinated, and lit with warm LEDs.
        </p>
        <img src="https://picsum.photos/800/400?random=7" className="rounded-xl shadow-lg my-8" alt="Minimalist Shelf" />

        <h2>The Aesthetic of the blister Pack</h2>
        <p>
          Some people open them. I respect that (Free it Friday!). But for me, the card art is half the experience. 
          The graphic design evolution of Hot Wheels packaging over the decades is a study in pop culture itself.
        </p>

        <h2>Curating Your Space</h2>
        <p>
          If you're struggling to find a way to display your cars that doesn't look cluttered, 
          try focusing on negative space. Don't jam 100 cars onto one shelf. 
          Pick your top 5 for the month, rotate them, and let them breathe.
        </p>
        
        <p>
          Need help visualizing a setup? I used the <Link to="/">Display Inspiration Tool</Link> on the homepage 
          to redesign my office setup last week. It suggested a pegboard wall which looks industrial and chic.
        </p>

        <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center">
          <div>
             <h3 className="m-0 text-slate-900">Get Inspired</h3>
             <p className="m-0 text-sm text-slate-500">Design your own display today.</p>
          </div>
          <Link to="/">
            <Button variant="outline">Try the Curator Tool</Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

