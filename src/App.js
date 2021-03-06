import React from "react";  

import './App.css';
import  Home  from './components/Home';
import  About  from './components/About';
import  NoMatch  from './components/NoMatch';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
  <Router>
    <NavigationBar />
    <Sidebar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route component={NoMatch} />
    </Switch>
  </Router>
</React.Fragment>
  );
}

export default App;
