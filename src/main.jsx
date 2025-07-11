import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorshipVideos from './pages/WorshipVideos';
import WorshipVideoDetail from './pages/WorshipVideoDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/worship/videos" element={<WorshipVideos />} />
        <Route path="/worship/videos/:id" element={<WorshipVideoDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
