import React, { Component } from 'react';
import Auxiliary from '../Auxiliary';

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
