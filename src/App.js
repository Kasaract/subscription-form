import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Subscribe from './components/subscribe/subscribe';
import ThankYou from './components/thankyou/thankyou';
import GetSubscribers from './components/getsubscribers/getsubscribers';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Subscribe} />
              <Route path="/subscribed" component={ThankYou} />
              <Route path="/getallsubscribers" component={GetSubscribers} />
            </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
