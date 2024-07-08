import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
import interact from "../assets/intract_text.svg"
import igtv1 from "../assets/igtv1.svg"
import { IoSearch } from "react-icons/io5";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react';


const Header = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedTab, setSelectedTab] = useState('academy');

    const handleFocus = () => {
      setIsExpanded(true);
    };
  
    const handleBlur = () => {
      setIsExpanded(false);
    };

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
      };

    const {isOpen, onOpen, onClose} = useDisclosure();

 return(
  <header className="header">
    <div className="logo">
    <img src={interact} alt='logo' />
    </div>
    <nav>
    {!isExpanded && (
      <ul>
        <li><Link to="/compass" className={selectedTab === 'compass' ? 'active' : ''}
            onClick={() => handleTabClick('compass')}>Compass</Link></li>
        <li><Link to="/explore" className={selectedTab === 'explore' ? 'active' : ''}
            onClick={() => handleTabClick('explore')}>Explore</Link></li>
        <li><Link to="/academy" className={selectedTab === 'academy' ? 'active' : ''}
            onClick={() => handleTabClick('academy')}>Academy</Link></li>
        <li><Link to="/nfts" className={selectedTab === 'nfts' ? 'active' : ''}
            onClick={() => handleTabClick('nfts')}>NFTs</Link></li>
        <li><Link to="/projects" className={selectedTab === 'projects' ? 'active' : ''}
            onClick={() => handleTabClick('projects')}>For Projects</Link></li>
      </ul>
    )}
        <div className='search'>
            <span><IoSearch /></span>
            <input type='text' placeholder='    Search for ecosystems, trending quests etc,.' className={`search-input ${isExpanded ? 'expanded' : ''}`}
            onFocus={handleFocus}
            onBlur={handleBlur} />
        </div>
    
    <ul>
    <li>
    <div>
    <Button onClick={onOpen} className='igtv'>
        {/* <PiTelevisionSimpleBold 
            backgroundColor="rgba(0,0,0,0.8)"
            size={32}
            style={{ fill: 'black'}}
            borderRadius="20px"

        /> */}
        <img src={igtv1} alt='igtv' className='igtv' />
    </Button>

<Drawer
  className="drawer"
  isOpen={isOpen}
  placement="right"
  onClose={onClose}
  size="md"
>
  <DrawerOverlay onClick={onClose} />
  <DrawerContent sx={{ maxWidth: '250px', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
    <DrawerCloseButton 
        position="absolute"
            right="8px"
            top="8px"
            borderRadius="20px"
            onClick={onClose}
            backgroundColor={ "rgba(0,0,0,0.3)"}
            color={"#fff"}
            height="40px"
            width="40px"
            fontSize="15px"
            _hover={{ bg: 'gray.300' }}
            boxShadow="none"
            cursor={"pointer"}
    />
    <DrawerHeader>Alhpa Feed</DrawerHeader>

    <DrawerBody>
      <p>Today's happening</p>
    </DrawerBody>

    <DrawerFooter>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    </div>
    </li>
    <li>
    <div className="auth-buttons">
      <button className="sign-in">Sign In</button>
    </div>
    </li>
    </ul>
    </nav>
  </header>
)
};

export default Header;
