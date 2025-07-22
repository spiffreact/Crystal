import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import BibleReading from './pages/BibleReading';
import ChurchIntro from './pages/ChurchIntro';
import ElementaryBibleStudy from './pages/ElementaryBibleStudy';
import ElementaryGroup from './pages/ElementaryGroup';
import Home from './pages/Home';
import OverseasOutreach from './pages/OverseasOutreach';
import Notice from './pages/Notice';
import OfferingGuide from './pages/OfferingGuide';
import PastorGreeting from './pages/PastorGreeting';
import QuickLinksGridPage from './pages/QuickLinksGridPage';
import WorshipVideoDetail from './pages/WorshipVideoDetail';
import WorshipVideos from './pages/WorshipVideos';
import YouthGroup from './pages/YouthGroup';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<ChurchIntro />} />
            <Route path="/intro/pastor" element={<PastorGreeting />} />
            <Route path="/worship/videos" element={<WorshipVideos />} />
            <Route
              path="/worship/videos/:id"
              element={<WorshipVideoDetail />}
            />
            <Route path="/community/youth" element={<YouthGroup />} />
            <Route path="/community/elementary" element={<ElementaryGroup />} />
            <Route path="/elementary-bible-study" element={<ElementaryBibleStudy />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/community/bible" element={<BibleReading />} />
            <Route path="/offering" element={<OfferingGuide />} />
            <Route path="/quick-links" element={<QuickLinksGridPage />} />
            <Route path="/mission/overseas-outreach" element={<OverseasOutreach />} />
          </Routes>
          <Footer />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
