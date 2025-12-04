import React, { useState } from 'react';
import './HotWheelsCollectorsHub.css';

/**
 * Hot Wheels Track & Display Builder Widget
 * AI-powered concept for generating track layouts and display ideas
 * In production, this would connect to Opus 4.5 API
 */
const HotWheelsCollectorsHub = () => {
  const [buildMode, setBuildMode] = useState(null);
  const [complexity, setComplexity] = useState('medium');
  const [suggestion, setSuggestion] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const modes = [
    { id: 'stunt', label: 'Epic Stunts', icon: '🔥', desc: 'Loops, jumps, and crashes' },
    { id: 'race', label: 'Speed Race', icon: '⚡', desc: 'Pure velocity showdown' },
    { id: 'display', label: 'Collector Display', icon: '🏆', desc: 'Showcase your collection' },
    { id: 'garage', label: 'Garage Scene', icon: '🔧', desc: 'Custom diorama vibes' },
  ];

  /* Simulated AI responses - In production, these would come from Opus 4.5 */
  const suggestionDatabase = {
    stunt: {
      simple: {
        name: "The Gravity Drop",
        desc: "Start with a 4-foot vertical drop into a single loop. Add a jump ramp at the exit that launches cars into a catch cup. Simple but satisfying.",
        parts: ["1x Vertical Drop", "1x Loop", "1x Jump Ramp", "1x Catch Cup"],
        tip: "Use the orange track pieces for maximum speed retention."
      },
      medium: {
        name: "Double Trouble Loop",
        desc: "Two consecutive loops followed by a corkscrew section. The key is maintaining enough momentum through the first loop to complete the second.",
        parts: ["2x Loops", "1x Corkscrew", "1x Launcher", "Track connectors"],
        tip: "Angle the entry slightly downward for consistent runs."
      },
      complex: {
        name: "The Gauntlet",
        desc: "A multi-stage stunt course: vertical drop → loop → split into two lanes → rejoin at a jump → synchronized landing. Requires precision building.",
        parts: ["1x Mega Drop", "2x Loops", "Lane Splitter", "Sync Jump Platform"],
        tip: "Test each section individually before connecting."
      }
    },
    race: {
      simple: {
        name: "Classic Drag Strip",
        desc: "Straight 10-foot downhill run with two parallel lanes. First car to cross the finish line wins. Pure, unfiltered speed.",
        parts: ["20x Straight Track", "2x Launchers", "1x Finish Gate"],
        tip: "Keep lanes perfectly parallel for fair racing."
      },
      medium: {
        name: "The Switchback",
        desc: "6-lane downhill with banked curves. Lanes weave and cross, creating exciting near-misses. Best for 4-6 car races.",
        parts: ["6x Lane Starters", "Banked Curves", "Crossover Sections"],
        tip: "Add slight elevation changes for drama."
      },
      complex: {
        name: "Grand Prix Circuit",
        desc: "Full circuit track with elevation changes, chicanes, and a pit lane. Multiple laps possible with a manual reset zone.",
        parts: ["Full Track Set", "Elevation Risers", "Chicane Kit", "Timing System"],
        tip: "Consider adding LED lighting for night races."
      }
    },
    display: {
      simple: {
        name: "Floating Shelf Gallery",
        desc: "Three floating shelves at different heights. Each shelf holds 5-7 cars on clear acrylic risers. Clean, minimalist, museum-quality.",
        parts: ["3x Floating Shelves (24\")", "15x Acrylic Risers", "LED Strip"],
        tip: "Use warm white LEDs (2700K) to highlight metallic finishes."
      },
      medium: {
        name: "The Collector's Grid",
        desc: "Wall-mounted grid system with modular slots. Each car gets its own illuminated compartment. Expandable as your collection grows.",
        parts: ["Grid Frame (36\" x 48\")", "Individual Slots", "Integrated Lighting"],
        tip: "Group by series or era for visual storytelling."
      },
      complex: {
        name: "The Showroom Experience",
        desc: "Full wall installation with rotating display platforms, backlit panels, and a digital catalog screen. The ultimate collector flex.",
        parts: ["Custom Wall Unit", "Rotating Platforms", "Smart Display Screen"],
        tip: "Include a 'new arrivals' spotlight zone."
      }
    },
    garage: {
      simple: {
        name: "Workbench Diorama",
        desc: "Mini garage scene on a 12\" base. Includes a lift, tool wall, and space for 3 cars. Perfect desk display.",
        parts: ["12\" Base", "Mini Lift", "Tool Wall Backdrop", "3x Car Spots"],
        tip: "Add tiny oil stains and tools for realism."
      },
      medium: {
        name: "The Pit Stop",
        desc: "Race day garage with tire racks, fuel station, and crew figures. Captures the energy of a real racing team.",
        parts: ["18\" Base", "Tire Rack", "Fuel Station", "Crew Figures (4x)"],
        tip: "Use real brand decals for authenticity."
      },
      complex: {
        name: "Dream Garage Complex",
        desc: "Multi-level garage with a car elevator, showroom floor, and rooftop helipad. A complete automotive fantasy.",
        parts: ["Multi-Level Frame", "Working Elevator", "Showroom Lighting", "Helipad"],
        tip: "This is a weekend project. Plan accordingly."
      }
    }
  };

  const handleGenerate = () => {
    if (!buildMode) return;
    
    setIsGenerating(true);
    setSuggestion(null);
    
    setTimeout(() => {
      const result = suggestionDatabase[buildMode][complexity];
      setSuggestion(result);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="hw-widget">
      <div className="widget-header">
        <div className="header-content">
          <h3>Track & Display Builder</h3>
          <span className="ai-tag">AI CONCEPT</span>
        </div>
        <p className="header-desc">
          Tell us what you want to build, and our AI will design it for you.
        </p>
      </div>

      <div className="widget-content">
        <div className="mode-section">
          <label>What are you building?</label>
          <div className="mode-grid">
            {modes.map((mode) => (
              <button
                key={mode.id}
                className={`mode-card ${buildMode === mode.id ? 'active' : ''}`}
                onClick={() => setBuildMode(mode.id)}
              >
                <span className="mode-icon">{mode.icon}</span>
                <span className="mode-label">{mode.label}</span>
                <span className="mode-desc">{mode.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="complexity-section">
          <label>Complexity Level</label>
          <div className="complexity-slider">
            {['simple', 'medium', 'complex'].map((level) => (
              <button
                key={level}
                className={`complexity-btn ${complexity === level ? 'active' : ''}`}
                onClick={() => setComplexity(level)}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <button 
          className={`generate-btn ${isGenerating ? 'loading' : ''}`}
          onClick={handleGenerate}
          disabled={!buildMode || isGenerating}
        >
          {isGenerating ? (
            <>
              <span className="spinner"></span>
              Designing...
            </>
          ) : (
            'IGNITE CONCEPT'
          )}
        </button>

        {suggestion && (
          <div className="suggestion-result">
            <div className="result-header">
              <h4>{suggestion.name}</h4>
            </div>
            <p className="result-desc">{suggestion.desc}</p>
            
            <div className="parts-list">
              <span className="parts-label">You'll need:</span>
              <ul>
                {suggestion.parts.map((part, i) => (
                  <li key={i}>{part}</li>
                ))}
              </ul>
            </div>
            
            <div className="pro-tip">
              <span className="tip-badge">PRO TIP</span>
              <p>{suggestion.tip}</p>
            </div>
          </div>
        )}
      </div>

      <div className="widget-footer">
        <span>🤖 Powered by AI-assisted design concepts</span>
      </div>
    </div>
  );
};

export default HotWheelsCollectorsHub;

