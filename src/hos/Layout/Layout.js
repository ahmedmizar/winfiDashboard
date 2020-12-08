import React, { Component } from 'react';
import Auxiliary from '../Auxiliary';
import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer/Footer"
import TopNavbar from "../../components/TopNavbar/TopNavbar"
import "./Layout.css"

class Layout extends Component {
	

	render() {
        
		return (
			
			<Auxiliary>
				
                <main>
                    {this.props.children}
                </main>
               
            </Auxiliary>	
			
		);
	}
}

export default Layout;
