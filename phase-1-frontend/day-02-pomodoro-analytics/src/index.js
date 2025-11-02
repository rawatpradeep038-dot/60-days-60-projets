// ============================================
// INDEX.JS - APPLICATION ENTRY POINT
// Purpose: Renders the React app into the DOM
// ============================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';      // Global styles
import App from './App';

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// EXPLANATION:
// This file is like the "power button" of your app
// It tells React: "Start here, put App component on the page"