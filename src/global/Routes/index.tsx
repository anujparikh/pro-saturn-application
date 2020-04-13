import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../../pages/dashboard';
import Login from '../../pages/login';
import Join from '../../pages/login/containers/sign-up';
import Templates from '../../pages/templates';
import Questions from '../../pages/questions';

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
        <Route path="/templates" component={Templates} exact></Route>
        <Route path="/questions" component={Questions} exact></Route>
      </Switch>
    </Router>
  );
};

export default ApplicationRoutes;
