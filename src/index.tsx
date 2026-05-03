import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
// Apply saved theme before first paint to avoid flash
try {
  const saved = window.localStorage.getItem('echo-theme');
  if (saved === 'dark' || saved === 'light') {
    document.documentElement.setAttribute('data-theme', saved);
  }
} catch {}
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);