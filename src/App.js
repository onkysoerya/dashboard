import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import DashboardAdmin from './View/DashboardAdmin';
import Home from './View/Home';

class App extends Component {
  render(){
    return (
      <div className="">
      <DashboardAdmin/>
        <Switch>
          <Route excat path="/" Component={Home}/>
          <Route path="/dashboard" Component={DashboardAdmin}/>
        </Switch>
      </div>
    );
  }
}

export default App;
