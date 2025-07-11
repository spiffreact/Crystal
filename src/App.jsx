import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ChurchIntro from './pages/ChurchIntro';
import Home from './pages/Home';
import PastorGreeting from './pages/PastorGreeting';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<ChurchIntro />} />
        <Route path="/intro/pastor" element={<PastorGreeting />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
