import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';

import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById("container")
);