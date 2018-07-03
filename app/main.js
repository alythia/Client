import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';

ReactDOM.render(
  <Router history={browserHistory}>
    <Routes />
  </Router>,
  document.getElementById('app')
);
