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
      gap: '20px'
    }}>
      <h1>AI Project Marketing Assignment</h1>
      <p>Select a prompt to view the website:</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="/Prompt 1/index.html" style={{
          padding: '15px 30px',
          backgroundColor: '#0f172a',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}>
          Prompt 1: Mattel Experience
        </a>
        <a href="/Prompt 2/index.html" style={{
          padding: '15px 30px',
          backgroundColor: '#e3002b',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}>
          Prompt 2: Brand Lab
        </a>
        <button disabled style={{
          padding: '15px 30px',
          backgroundColor: '#e2e8f0',
          color: '#94a3b8',
          border: 'none',
          borderRadius: '8px',
          cursor: 'not-allowed'
        }}>
          Prompt 3 (Coming Soon)
        </button>
      </div>
    </div>
  )
}

export default App
