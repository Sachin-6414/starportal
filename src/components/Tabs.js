import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
import { Button, ChakraProvider} from '@chakra-ui/react';

const Tabs = () => {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <ChakraProvider>
  <div className='all-tabs'>
  <div className="tabs">
    {/* <Link to="/academy/essentials" className="tab">Essentials</Link>
    <Link to="/academy/alpha-hub" className="tab">Alpha Hub</Link> */}
    <button
        className={`toggle-button ${isActive ? 'active' : ''}`}
        onClick={handleToggle}
      >
        Essentials
      </button>
      <button
        className={`toggle-button ${!isActive ? 'active' : ''}`}
        onClick={handleToggle}
      >
        Alpha Hub
      </button>
  </div>
  </div>
  </ChakraProvider>
)};

export default Tabs;
