import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
	render () {
		return (
			<div>
				<Link to="/home">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/dropdown">Dropdown</Link>
				<Link to="/registration">Registration</Link>
			</div>
		)
	}
}
export default Menu;