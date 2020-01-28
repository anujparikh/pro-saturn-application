import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import Join from '../../pages/Join';

const ApplicationRoutes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/join" component={Join} exact></Route>
        <Route path="/dashboard" component={Dashboard} exact></Route>
      </Switch>
    </Router>
  );
};

export default ApplicationRoutes;
