import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import DashboardAdmin from './View/DashboardAdmin';

class App extends Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={DashboardAdmin}/>
        </Switch>
      </div>
    );
  }
}

export default App;
