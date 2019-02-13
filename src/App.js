import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import About from './About';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css';

class App extends Component {
  render() {
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
          key={location.key}
          timeout={450}
          classNames='fade'
          >
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/about' component={About} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    );
  }
}

export default App;
