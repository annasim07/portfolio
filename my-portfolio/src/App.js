import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import About from './components/About';
import Games from './pages/Games';
import Art from './pages/Art';
import Digital from './pages/Digital';
import UI_UX from './pages/UI';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar className="nav" light expand="md">
          <NavbarBrand className="nav" href="/">Anna Sim</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/ui">UI/UX</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/games">Games</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/art">Art</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/digital">Digital</NavLink>
              </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/digital" component={Digital}/>
          <Route path="/ui" component={UI_UX}/>
          <Route path="/games" component={Games}/>
          <Route path="/art" component={Art}/>
        </Switch>
      </Router>

      <br />

    </div>
  );
}

export default App;