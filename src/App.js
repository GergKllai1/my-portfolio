import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import About from './About';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CSSTransition
          timeout={300}
          classNames='fade'
        >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/about' component={About} />
          </Switch>
        </CSSTransition>
      </BrowserRouter>
    );
  }
}

export default App;
