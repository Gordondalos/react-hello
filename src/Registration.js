import React, { Component } from 'react';


class Registration extends Component {
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<input placeholder="email" value={this.state.email} onChange={this.handleChange} type="text"/>
				<button>Save</button>
			</form>
		)

	}

	constructor ( props ) {
		super ( props );
		this.state = {
			email : ''
		};
		// нужно прибайндивать this к методам чтобы он понимал контекст, делается это прямо тут в конструкторе
		this.handleChange = this.handleChange.bind ( this );
		this.handleSubmit = this.handleSubmit.bind ( this );
	}


	handleChange ( event ) {
		this.setState ( { email : event.target.value } );
		console.log ( 'email change', event.target.value );
	}

	handleSubmit (event) {
		event.preventDefault();
		console.log ( 'form submit', this.state.email );
	}
}

export default Registration;
