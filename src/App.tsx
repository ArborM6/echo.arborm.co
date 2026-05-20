import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Support } from './pages/Support';
import { DeleteAccount } from './pages/DeleteAccount';
import { DeleteAccountConfirm } from './pages/DeleteAccountConfirm';
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/support" element={<Support />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/delete-account/confirm" element={<DeleteAccountConfirm />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>);

}