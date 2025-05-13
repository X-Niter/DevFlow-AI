import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Admin from './components/Admin';
import Onboarding from './components/Onboarding';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Landing</Link> | <Link to="/admin">Admin</Link> | <Link to="/onboarding">Onboarding</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </div>
  );
}
