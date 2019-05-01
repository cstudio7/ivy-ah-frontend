import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Login from '../components/Login';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;