import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { App } from './App';
import { LanguageProvider } from './i18n';
// Apply saved theme before first paint to avoid flash
try {
  const saved = window.localStorage.getItem('echo-theme');
  if (saved === 'dark' || saved === 'light') {
    document.documentElement.setAttribute('data-theme', saved);
  }
} catch {
  // Continue with the default theme when local storage is unavailable.
}
render(
  <BrowserRouter>
    <LanguageProvider>
      <App />
      <Analytics />
      <SpeedInsights />
    </LanguageProvider>
  </BrowserRouter>,
  document.getElementById('root')
);