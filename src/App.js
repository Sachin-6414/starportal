import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Header from './components/Header';
import Tabs from './components/Tabs';

// import Essentials from './pages/Essentials';
// import AlphaHub from './pages/AlphaHub';
import './App.css';
import "./index.css";
import MainContent from './components/MainContent';

const App = () => (
  <Router>
    <Header />
    <MainContent />
    <Tabs />
    {/* <Routes>
      <Link to"/" </Routes>></Link>
    </Routes> */}
  </Router>
);

export default App;
