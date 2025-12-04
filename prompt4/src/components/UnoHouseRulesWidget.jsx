import React, { useState } from 'react';
import './UnoHouseRulesWidget.css';

/**
 * UNO House Rules Widget
 * An AI-powered concept for generating custom game rules
 * In production, this would connect to Opus 4.5 API
 */
const UnoHouseRulesWidget = () => {
  const [selectedVibe, setSelectedVibe] = useState(null);
  const [playerCount, setPlayerCount] = useState('4');
  const [generatedRule, setGeneratedRule] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const vibes = [
    { id: 'chaos', label: 'Total Chaos', emoji: '🌪️', color: 'var(--uno-red)' },
    { id: 'speed', label: 'Speed Demon', emoji: '⚡', color: 'var(--uno-yellow)' },
    { id: 'strategy', label: 'Big Brain', emoji: '🧠', color: 'var(--uno-blue)' },
    { id: 'family', label: 'Family Fun', emoji: '💚', color: 'var(--uno-green)' },
  ];

  /* Simulated AI responses - In production, these would come from Opus 4.5 */
  const ruleDatabase = {
    chaos: {
      '2-3': {
        name: "Revenge Protocol",
        rule: "When you're hit with a Draw 2, you can immediately challenge the player. If they can't name 3 UNO card types in 5 seconds, THEY draw instead.",
        tip: "Best played with competitive siblings."
      },
      '4-6': {
        name: "The Shuffle Storm",
        rule: "Every time a 7 is played, all players must pass their entire hand to the left. When a 0 is played, everyone swaps with the person across from them.",
        tip: "Keep your poker face ready."
      },
      '7+': {
        name: "Musical Cards",
        rule: "Start music. When it stops, everyone must immediately play a card. Last person to play draws 2. No thinking allowed!",
        tip: "Spotify shuffle is your new dealer."
      }
    },
    speed: {
      '2-3': {
        name: "Blitz Mode",
        rule: "No turns. Everyone plays simultaneously. First valid card on the pile wins that round. Collisions = both players draw 1.",
        tip: "Reflexes > Strategy"
      },
      '4-6': {
        name: "Jump-In Frenzy",
        rule: "If you have the EXACT same card (number + color), you can slam it down out of turn. Play continues from you.",
        tip: "Watch everyone's hands, not just the pile."
      },
      '7+': {
        name: "30-Second Showdown",
        rule: "Each player has exactly 30 seconds for their entire turn, including drawing. Timer runs out = draw 3 cards.",
        tip: "Appoint a ruthless timekeeper."
      }
    },
    strategy: {
      '2-3': {
        name: "The Long Game",
        rule: "Draw 2s and Wild Draw 4s can be stacked infinitely. The chain only breaks when someone can't add to it. That person draws the total.",
        tip: "Save your power cards for the endgame."
      },
      '4-6': {
        name: "Color Lockout",
        rule: "When you play your second-to-last card, you must declare a color. You can ONLY win by playing that color as your final card.",
        tip: "Bluffing is encouraged."
      },
      '7+': {
        name: "Alliance Mode",
        rule: "Players can form temporary alliances (max 2 people). Allies can show each other ONE card per round. Alliances can be broken at any time.",
        tip: "Trust no one. Betray everyone."
      }
    },
    family: {
      '2-3': {
        name: "Helper Hand",
        rule: "Once per game, you can ask to see another player's hand and give them one piece of advice. They don't have to take it!",
        tip: "Great for teaching younger players."
      },
      '4-6': {
        name: "Compliment Card",
        rule: "When you play a green card, you must give a genuine compliment to the player on your left. Skip the compliment = draw 1.",
        tip: "Spreads good vibes and slows the game down."
      },
      '7+': {
        name: "Story Time",
        rule: "The winner of each round must tell a 30-second story using the last 3 cards played as inspiration. Best story (voted) gets -2 points.",
        tip: "Creativity > Competition"
      }
    }
  };

  const getPlayerBracket = (count) => {
    const num = parseInt(count);
    if (num <= 3) return '2-3';
    if (num <= 6) return '4-6';
    return '7+';
  };

  const handleGenerate = () => {
    if (!selectedVibe) return;
    
    setIsGenerating(true);
    setGeneratedRule(null);
    
    // Simulate API delay
    setTimeout(() => {
      const bracket = getPlayerBracket(playerCount);
      const rule = ruleDatabase[selectedVibe][bracket];
      setGeneratedRule(rule);
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <div className="uno-widget">
      <div className="widget-chrome">
        <div className="chrome-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="chrome-title">AI House Rules Generator</span>
        <span className="chrome-badge">OPUS 4.5</span>
      </div>

      <div className="widget-body">
        <div className="widget-intro">
          <p>Tell us about your game night, and our AI will craft a custom house rule just for you.</p>
        </div>

        <div className="widget-form">
          <div className="form-group">
            <label>How many players?</label>
            <div className="player-selector">
              {['2', '4', '6', '8+'].map((count) => (
                <button
                  key={count}
                  className={`player-btn ${playerCount === count ? 'active' : ''}`}
                  onClick={() => setPlayerCount(count)}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>What's the vibe?</label>
            <div className="vibe-grid">
              {vibes.map((vibe) => (
                <button
                  key={vibe.id}
                  className={`vibe-btn ${selectedVibe === vibe.id ? 'active' : ''}`}
                  style={{ '--vibe-color': vibe.color }}
                  onClick={() => setSelectedVibe(vibe.id)}
                >
                  <span className="vibe-emoji">{vibe.emoji}</span>
                  <span className="vibe-label">{vibe.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button 
            className={`generate-btn ${isGenerating ? 'loading' : ''}`}
            onClick={handleGenerate}
            disabled={!selectedVibe || isGenerating}
          >
            {isGenerating ? (
              <span className="loading-text">
                <span className="spinner"></span>
                Consulting the deck...
              </span>
            ) : (
              'Generate House Rule'
            )}
          </button>
        </div>

        {generatedRule && (
          <div className="rule-result">
            <div className="rule-header">
              <h4 className="rule-name">{generatedRule.name}</h4>
            </div>
            <p className="rule-text">{generatedRule.rule}</p>
            <div className="rule-tip">
              <span className="tip-icon">💡</span>
              <span className="tip-text">{generatedRule.tip}</span>
            </div>
          </div>
        )}
      </div>

      <div className="widget-footer">
        <span className="ai-note">✨ This widget demonstrates AI-assisted game design</span>
      </div>
    </div>
  );
};

export default UnoHouseRulesWidget;

