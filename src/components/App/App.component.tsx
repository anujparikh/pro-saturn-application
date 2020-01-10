import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.component.less';
import Dashboard from '../../pages/Dashboard.page';
import Login from '../../pages/Login.page';
import Join from '../../pages/Join.page';

const App: React.FC = () => {
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

export default App;
