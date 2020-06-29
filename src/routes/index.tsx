import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import Admin from '../pages/Admin';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/signup" component={SignUp} />
    <Route path="/admin" component={Admin} />
  </Switch>
);

export default Routes;
