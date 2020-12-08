import React, { Component } from 'react';
import Header from "./Header/Header" 
import Footer from "./Footer/Footer"
import Auxiliary from '../../hos/Auxiliary';
import JoinSiraj from './JoinSiraj/JoinSiraj';
import AppExplanation from './AppExplanation';

class Index extends Component {
    render() { 
        return (
            <Auxiliary>
                <Header />
                <AppExplanation />
                <JoinSiraj />
                <Footer />
            </Auxiliary>
        );
    }
}
 
export default Index;