import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import DashboardAdmin from './View/DashboardAdmin';
import TambahBerita from './View/TambahBerita';

class App extends Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={DashboardAdmin}/>
          <Route path="/tambahberita" component={TambahBerita}/>
        </Switch>
      </div>
    );
  }
}

export default App;
