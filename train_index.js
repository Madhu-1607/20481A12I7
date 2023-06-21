import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );
  