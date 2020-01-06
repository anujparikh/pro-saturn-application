import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../../pages/Landing.page';
import Login from '../../pages/Login.page';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} exact></Route>
        <Route path="/login" component={Login} exact></Route>
      </Switch>
    </Router>
  );
};

export default App;
