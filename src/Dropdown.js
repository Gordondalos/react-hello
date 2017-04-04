import React, { Component } from 'react';


class Dropdown extends Component {
	render () {

		let dropdownText;
		if ( this.state.isOpened ) {
			dropdownText = <div>Here is what is shown in dropdown </div>;
		}

		return (
			<div onClick={this.toggleState.bind ( this )}>
				its dropdown bebe
				{dropdownText}
			</div>
		)
	}


	constructor ( props ) {
		super ( props );
		this.state = { isOpened : false };
	}


	toggleState () {
		this.setState ( { isOpened : !this.state.isOpened } );
	}


}

export default Dropdown;
