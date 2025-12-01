import React, { useState } from 'react';
import './UnoHouseRulesWidget.css';

const UnoHouseRulesWidget = () => {
  const [vibe, setVibe] = useState('chaotic');
  const [generatedRule, setGeneratedRule] = useState(null);

  const rulesDatabase = {
    chaotic: {
      title: "The Shuffle Slam",
      desc: "Whenever a '7' is played, every player must pass their hand to the left. If a '0' is played, pass to the right."
    },
    quick: {
      title: "Jump-In Speed Run",
      desc: "Playing out of turn is allowed if you have the EXACT matching card (number and color). First to 0 cards wins instantly."
    },
    strategic: {
      title: "Stacking Protocol",
      desc: "Draw 2s and Wild Draw 4s can be stacked. If you can't stack, you draw the total sum. No mercy."
    },
    family: {
      title: "Compassionate Swap",
      desc: "Once per game, a player can swap hands with the person who has the most cards to help them out."
    }
  };

  const generateRule = () => {
    // Simulate AI generation delay
    setGeneratedRule(null);
    setTimeout(() => {
      setGeneratedRule(rulesDatabase[vibe]);
    }, 600);
  };

  return (
    <div className="uno-widget">
      <div className="widget-header">
        <h3>AI House Rules Generator</h3>
        <span className="ai-badge">AI BETA</span>
      </div>
      <p className="widget-intro">Tell us the vibe of your game night, and our AI will draft a custom rule to spice things up.</p>
      
      <div className="widget-controls">
        <label>Game Vibe:</label>
        <select value={vibe} onChange={(e) => setVibe(e.target.value)}>
          <option value="chaotic">Chaotic & Wild</option>
          <option value="quick">Fast Paced</option>
          <option value="strategic">Ruthless Strategy</option>
          <option value="family">Family Friendly</option>
        </select>
        <button onClick={generateRule} className="btn-generate">Generate Rule</button>
      </div>

      {generatedRule && (
        <div className="rule-output fade-in">
          <h4>{generatedRule.title}</h4>
          <p>{generatedRule.desc}</p>
        </div>
      )}
    </div>
  );
};

export default UnoHouseRulesWidget;

