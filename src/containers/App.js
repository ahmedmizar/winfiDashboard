import React, { Component } from 'react';

import {Route, Switch,Router, Redirect } from "react-router-dom";
import './App.css';
import Layout from '../hos/Layout/Layout';
import { history } from "../appRedux/store/index";
import EnterPhone from './EnterPhone/EnterPhone';
import VeryifyPhone from './VeryifyPhone/VeryifyPhone';
import ResendPhone from './ResendPhone/ResendPhone';
import CreateAccount from './CreateAccount/CreateAccount';
class App extends Component {
  render() {
    return (
       <Router history={history}>
          <Switch>
          <Layout>
            <Route exact path="/enterPhone" component={EnterPhone} />
            <Route exact path="/" component={EnterPhone} />
            <Route exact path="/veryifyPhone" component={VeryifyPhone} />
            <Route exact path="/resendPhone" component={ResendPhone} />
            <Route exact path="/createAccount" component={CreateAccount} />
          </Layout>
        </Switch>
       </Router>
     
    );
  }
}


export default App ;
