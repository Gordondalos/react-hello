import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
	render () {
		return (
			<div className="navbar navbar-toggleable-md navbar-light bg-faded">
				<ul className="nav">
					<li className="nav-item">
						<span className="nav-link">
							<Link to="/home">Home</Link>
						</span>
					</li>
					<li className="nav-item">
						<span className="nav-link">
							<Link to="/about">About</Link>
						</span>
					</li>
					<li className="nav-item">
						<span className="nav-link">
							<Link to="/dropdown">Dropdown</Link>
						</span>
					</li>
					<li className="nav-item">
						<span className="nav-link">
							<Link to="/registration">Registration</Link>
						</span>
					</li>
				</ul>

			</div>
		)
	}
}
export default Menu;