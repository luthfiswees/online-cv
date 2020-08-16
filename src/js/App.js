import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import ExperiencePage from './pages/experience/ExperiencePage';
import EducationPage from './pages/education/EducationPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/experience" component={ExperiencePage} />
          <Route exact path="/education" component={EducationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;