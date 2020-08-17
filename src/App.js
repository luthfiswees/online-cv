import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/PageRoot';

class App extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;