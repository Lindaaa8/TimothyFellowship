import React from 'react';
import {BrowseRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Compoents/Home';
import Header from './Compoents/Header';
import Explore from './Compoents/Explore';
import Contact from './Compoents/Contact';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/explore" exact component={Explore}/>
        <Route path="/contact" exact component={Contact}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
