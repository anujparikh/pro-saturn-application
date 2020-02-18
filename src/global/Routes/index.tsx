import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import Join from '../../pages/Join';
import Templates from '../../pages/Templates';
import Questions from '../../pages/Questions';
import AddQuestions from '../../pages/AddQuestions';

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
        <Route path="/questions/add" component={AddQuestions} exact></Route>
      </Switch>
    </Router>
  );
};

export default ApplicationRoutes;
