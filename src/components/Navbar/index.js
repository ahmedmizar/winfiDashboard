import React from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = (props) => {
	
	return (
			
		<nav className="menuBar">
			<div className="container">
		
		<div className="menuCon">
			<div className="leftMenu">
				<LeftMenu />
			</div>
			<div className="rightMenu">
				<RightMenu />
			</div>
		

		</div>
		</div>
	</nav>
	
);
}

export default Navbar;
