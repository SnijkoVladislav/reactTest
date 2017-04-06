import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import MathPage from './app/screens/Math';
import PingPage from './app/screens/Ping';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MathPage} />
    <Route path="/ping" component={PingPage} />
  </Router>,
  document.getElementById('container')
);
