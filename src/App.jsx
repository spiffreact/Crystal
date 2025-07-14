import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ChurchIntro from './pages/ChurchIntro';
import Home from './pages/Home';
import PastorGreeting from './pages/PastorGreeting';
import WorshipVideos from './pages/WorshipVideos';
import WorshipVideoDetail from './pages/WorshipVideoDetail';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<ChurchIntro />} />
          <Route path="/intro/pastor" element={<PastorGreeting />} />
          <Route path="/worship/videos" element={<WorshipVideos />} />
          <Route path="/worship/videos/:id" element={<WorshipVideoDetail />} />
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
