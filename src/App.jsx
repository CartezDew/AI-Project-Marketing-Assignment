import React from 'react';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif',
      gap: '24px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px', color: '#1a1a1a' }}>
        AI Project Marketing Assignment
      </h1>
      <p style={{ color: '#666', marginBottom: '16px' }}>
        Select a prompt to view the website:
      </p>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="/Prompt 1/index.html" style={{
          padding: '18px 32px',
          backgroundColor: '#0f172a',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '12px',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'transform 0.2s',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>
          Prompt 1: Mattel Experience
        </a>
        <a href="/Prompt 2/index.html" style={{
          padding: '18px 32px',
          backgroundColor: '#e3002b',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '12px',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'transform 0.2s',
          boxShadow: '0 4px 15px rgba(227,0,43,0.3)'
        }}>
          Prompt 2: Brand Lab
        </a>
        <a href="/Prompt 3/index.html" style={{
          padding: '18px 32px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '12px',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'transform 0.2s',
          boxShadow: '0 4px 15px rgba(102,126,234,0.4)'
        }}>
          Prompt 3: Opus Edition
        </a>
      </div>
      <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '24px' }}>
        Educational Use Only | Mattel Marketing Project
      </p>
    </div>
  )
}

export default App
