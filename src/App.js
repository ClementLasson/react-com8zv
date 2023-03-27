import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation.js';
import Users from './views/users.js';
import Detail from './views/detail.js';
import Gestion from './views/gestion.js';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/utilisateurs/:user_id" element={<Detail />} />
        <Route path="/utilisateurs/editer/:user_id" element={<Gestion />} />
      </Routes>
    </div>
  );
}
