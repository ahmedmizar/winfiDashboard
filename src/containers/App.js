import React, { Component } from 'react';

import {Route, Switch,Router, Redirect } from "react-router-dom";
import './App.css';
import Layout from '../hos/Layout/Layout';

import Registeration from '../containers/Registeration/Registeration';
import Index from '../components/Home';
import ChooseAccount from '../components/ChooseAcount/ChooseAccount';
import SocialRegistration from './SocialRegistraion/SocialRegistraion';
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
import { history } from "../appRedux/store/index";
import PhoneNumber from './PhoneNumber/PhoneNumber';
import VerifyPhone from './VerifyPhone/VerifyPhone';
import Welcome from './Welcome/Welcome';
import QuestionnaireOne from './QuestionnaireOne/QuestionnaireOne';
import QuestionnaireTwo from './QuestionnaireTwo/QuestionnaireTwo';
import QuestionnaireThree from './QuestionnaireThree/QuestionnaireThree';
import QuestionnaireFour from './QuestionnaireFour/QuestionnaireFour';
import QuestionnaireFive from './QuestionnaireFive/QuestionnaireFive';
import QuestionnaireSix from './QuestionnaireSix/QuestionnaireSix';
import QuestionnaireSaven from './QuestionnaireSaven/QuestionnaireSaven';
import SignIn from './SignIn/SignIn';
import EnterPhone from './EnterPhone/EnterPhone';



class App extends Component {

  render() {
    return (
    
       <Router history={history}>
          <Switch>
          <Layout>
           
            <PrivateRoute exact path="/verifyPhone" component={VerifyPhone} />
            <PrivateRoute exact path="/phoneNumber" component={PhoneNumber} />
            <Route exact path="/" component={Index} />
            <Route exact path="/SocialRegistraion" component={SocialRegistration}/>
            <Route exact path="/signIn" component={SignIn}/>
            
            <Route exact path="/registeration" component={Registeration} />
            <Route exact path="/chooseAccount" component={ChooseAccount} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/questionnaireOne" component={QuestionnaireOne} />
            <Route exact path="/questionnaireTwo" component={QuestionnaireTwo} />
            <Route exact path="/questionnaireThree" component={QuestionnaireThree} />
            <Route exact path="/questionnaireFour" component={QuestionnaireFour} />
            <Route exact path="/questionnaireFive" component={QuestionnaireFive} />
            <Route exact path="/questionnaireSix" component={QuestionnaireSix} />
            <Route exact path="/questionnaireSaven" component={QuestionnaireSaven} />
            <Route exact path="/enterPhone" component={EnterPhone} />
            {/* <Redirect from="*" to="/" /> */}
          </Layout>
        </Switch>
       </Router>
     
    );
  }
}


export default App ;
