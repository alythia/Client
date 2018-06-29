import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Root from './root';

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('app')
);
