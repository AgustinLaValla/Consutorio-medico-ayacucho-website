import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { navLinks } from './data/navData';
import Sidebar from './components/Sidebar/Sidebar';
import Inicio from './pages/Inicio/Inicio';
import Footer from './components/Footer/Footer';
import Staff from './pages/staff/Staff';
import Nosotros from './pages/nosotros/Nosotros';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <GlobalStyle />
      <Navbar navLinks={navLinks} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} navLinks={navLinks} />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Redirect to="/"/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
