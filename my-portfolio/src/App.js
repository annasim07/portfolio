import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { StylesProvider } from '@material-ui/core/styles';
// import About from './components/About';
import { Home } from './pages/Home';
import Games from './pages/Games';
import Art from './pages/Art';
import Digital from './pages/Digital';
import UI_UX from './pages/UI';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <StylesProvider injectFirst>
      <Router>
        <Navbar className="container" light expand="md">
          <NavbarBrand className="nav" href="/">Anna Sim</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/ui">UI/UX</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/games">Games</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/art">Art</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/digital">Digital</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem> */}
          </Nav>
        </Navbar>

        <Switch>
          {/* <Route exact path="/about" component={About}/> */}
          <Route exact path='/' component={Home} />
          <Route path="/digital" component={Digital}/>
          <Route path="/ui" component={UI_UX}/>
          <Route path="/games" component={Games}/>
          <Route path="/art" component={Art}/>
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;