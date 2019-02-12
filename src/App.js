import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import About from './About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/about' component={About} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
