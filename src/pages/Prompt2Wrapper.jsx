import React from 'react';
import { Link } from 'react-router-dom';
import './PromptWrapper.css';

const Prompt2Wrapper = () => {
  return (
    <div className="prompt-wrapper">
      <div className="prompt-wrapper-header">
        <Link to="/" className="back-to-prompts">← Back to Prompts</Link>
        <h2 className="prompt-wrapper-title">Prompt 2: Brand Lab</h2>
        <div className="prompt-wrapper-meta">
          <span>🤖 Google Gemini 3 Pro</span>
          <span>•</span>
          <span>Cursor IDE</span>
        </div>
      </div>
      <iframe 
        src="/prompt2/index.html" 
        className="prompt-iframe"
        title="Prompt 2 - Brand Lab"
      />
    </div>
  );
};

export default Prompt2Wrapper;

