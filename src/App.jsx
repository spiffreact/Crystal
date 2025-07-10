import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ChurchIntro from './pages/ChurchIntro';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<ChurchIntro />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
