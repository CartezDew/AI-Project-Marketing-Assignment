import React from 'react';
import { Link } from 'react-router-dom';
import './PromptWrapper.css';

const Prompt1Wrapper = () => {
  return (
    <div className="prompt-wrapper">
      <div className="prompt-wrapper-header">
        <Link to="/" className="back-to-prompts">← Back to Prompts</Link>
        <h2 className="prompt-wrapper-title">Prompt 1: Mattel Experience</h2>
        <div className="prompt-wrapper-meta">
          <span>🤖 Google Gemini 3 Pro</span>
          <span>•</span>
          <span>Google AI Studio</span>
        </div>
      </div>
      <iframe 
        src="/prompt1/index.html" 
        className="prompt-iframe"
        title="Prompt 1 - Mattel Experience"
      />
    </div>
  );
};

export default Prompt1Wrapper;

