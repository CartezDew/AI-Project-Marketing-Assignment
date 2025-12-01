import React, { useState } from 'react';
import './HotWheelsCollectorsHub.css';

const HotWheelsCollectorsHub = () => {
  const [mood, setMood] = useState('stunt');
  const [suggestion, setSuggestion] = useState(null);

  const trackIdeas = {
    stunt: {
      title: "The Gravity Loop Challenge",
      desc: "Use a high vertical drop to fuel a double loop. Add a jump at the end into a catch cup."
    },
    race: {
      title: "6-Lane Drag Strip",
      desc: "Pure speed. A straight 20ft downhill run with digital finish line. Use side barriers to keep cars locked in."
    },
    garage: {
      title: "The Ultimate Garage Display",
      desc: "Multi-level parking structure with spiral ramps. LED lighting on each deck to showcase the chrome finish."
    }
  };

  const generateTrack = () => {
    setSuggestion(null);
    setTimeout(() => {
      setSuggestion(trackIdeas[mood]);
    }, 600);
  };

  return (
    <div className="hw-widget">
      <div className="widget-header">
        <h3>Track & Display Builder</h3>
        <span className="ai-badge-hw">AI CONCEPT</span>
      </div>
      
      <div className="widget-body">
        <p>Select your build mood:</p>
        <div className="mood-selector">
          <button 
            className={`mood-btn ${mood === 'stunt' ? 'active' : ''}`}
            onClick={() => setMood('stunt')}
          >Stunts</button>
          <button 
            className={`mood-btn ${mood === 'race' ? 'active' : ''}`}
            onClick={() => setMood('race')}
          >Racing</button>
          <button 
            className={`mood-btn ${mood === 'garage' ? 'active' : ''}`}
            onClick={() => setMood('garage')}
          >Garage</button>
        </div>

        <button onClick={generateTrack} className="btn-generate-hw">
          IGNITE CONCEPT
        </button>

        {suggestion && (
          <div className="hw-suggestion slide-up">
            <h4>{suggestion.title}</h4>
            <p>{suggestion.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotWheelsCollectorsHub;

