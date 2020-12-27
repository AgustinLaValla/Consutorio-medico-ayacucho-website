import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { navLinks } from './data/navData';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <GlobalStyle />
      <Navbar navLinks={navLinks} toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} navLinks={navLinks}/>
    </Router>
  );
}

export default App;
