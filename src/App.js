import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'

// import Essentials from './pages/Essentials';
// import AlphaHub from './pages/AlphaHub';
import './App.css';
import "./index.css";
import MainContent from './components/MainContent';

const App = () => (
  <Router>
    <Header />
    <MainContent />
    {/* <Routes>
      <Link to"/" </Routes>></Link>
    </Routes> */}
    <Footer />
  </Router>
);

export default App;
