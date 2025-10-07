import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Cuisine from './components/Cuisine.tsx';
import Dishes from './components/dishes/Dishes.tsx';
import Desserts from './components/desserts/Desserts.tsx';
import Kakanin from './components/kakanin/Kakanin.tsx';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/kakanin" element={<Kakanin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);