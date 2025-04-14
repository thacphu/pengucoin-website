import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = () => (
  <div style={{ textAlign: 'center', marginTop: '3rem' }}>
    <h1>🐧 Welcome to PenguCoin</h1>
    <p>PenguCoin (PGC) is a community-driven meme token on the Binance Smart Chain.</p>
    <p><strong>Contract:</strong> 0x5e501E99825246929f4cC911348c2AC4AD9BeaBa</p>
    <a href="https://pancakeswap.finance/swap?outputCurrency=0x5e501E99825246929f4cC911348c2AC4AD9BeaBa" target="_blank" rel="noopener noreferrer">
      Buy on PancakeSwap
    </a>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
