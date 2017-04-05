import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';


class Home extends Component {
	render () {
		return (
			<div>
				<div>
					<input type="text" ref={( input ) => {
						this.trackInput = input
					}}/>
					<button onClick={this.addTrack.bind ( this )}>Add track</button>
				</div>
				<div>
					<input
						onChange={this.findTrack.bind ( this )}
						type="text" ref={( input ) => {
						this.searchInput = input
					}}/>
					<button onClick={this.findTrack.bind ( this )}>Find track</button>
				</div>
				<div>
					<button onClick={this.props.onGetTracks}>Get tracks</button>
				</div>
				<ul>
					{this.props.tracks.map ( ( track, index ) =>
						<li key={index}>{track.name}</li>
					)}
				</ul>
			</div>
		)
	}

	// эти два метода работают чтобы что то сделать с данными, например чтобы передать их в хранилище redux
	addTrack () {
		console.log ( 'addTrack', this.trackInput.value );
		this.props.onAddTrack ( this.trackInput.value );
		this.trackInput.value = '';
	}

	findTrack () {
		console.log ( 'findTrack', this.searchInput.value );
		this.props.onFindTrack ( this.searchInput.value );
	}
}
export default connect (
	state => ({
		tracks : state.tracks.filter ( track => track.name.includes ( state.filterTracks ) ),
		playlists : state.playlists
	}),
	dispatch => ({
		// эти методы добавляют в хранилище редакс данные которые мы им передаи
		onAddTrack : ( name ) => {
			const payload = {
				id : Date.now ().toString (),
				name
			};
			dispatch ( { type : 'ADD_TRACK', payload } );
		},
		onFindTrack : ( name ) => {
			console.log ( 'name', name );
			dispatch ( { type : 'FIND_TRACK', payload : name } );
		},
		onGetTracks : () => {
			dispatch ( getTracks () );
		}
	})
) ( Home );