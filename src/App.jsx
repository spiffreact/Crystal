import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import BibleReading from './pages/BibleReading';
import ChurchIntro from './pages/ChurchIntro';
import EducationTeam from './pages/EducationTeam';
import ElementaryBibleStudy from './pages/ElementaryBibleStudy';
import ElementaryGroup from './pages/ElementaryGroup';
import Home from './pages/Home';
import Login from './pages/Login';
import NewcomerCare from './pages/NewcomerCare';
import OverseasOutreach from './pages/OverseasOutreach';
import PastoralPlan from './pages/PastoralPlan';
import Notice from './pages/Notice';
import ChurchVisit from './pages/ChurchVisit';
import NewcomerManagement from './pages/NewcomerManagement';
import WorshipTeam from './pages/WorshipTeam';
import Welcome from './pages/Welcome';
import RegisterNewcomer from './pages/RegisterNewcomer';
import AttendanceCheck from './pages/AttendanceCheck';
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
            <Route path="/login" element={<Login />} />
            <Route path="/community/newcomer-care" element={<NewcomerCare />} />
            <Route path="/intro/pastoral-plan" element={<PastoralPlan />} />
            <Route path="/welcome/visit" element={<ChurchVisit />} />
            <Route 
              path="/community/education-team" 
              element={
                <ProtectedRoute>
                  <EducationTeam />
                </ProtectedRoute>
              } 
            />
            <Route
              path="/community/education-team/newcomer-management"
              element={
                <ProtectedRoute>
                  <NewcomerManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/community/education-team/attendance-check"
              element={
                <ProtectedRoute>
                  <AttendanceCheck />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/community/worship-team" 
              element={
                <ProtectedRoute>
                  <WorshipTeam />
                </ProtectedRoute>
              } 
            />
            <Route path="/welcome/greeting" element={<Welcome />} />
            <Route path="/welcome/register" element={<RegisterNewcomer />} />
          </Routes>
          <Footer />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
