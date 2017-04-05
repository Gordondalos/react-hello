import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';


class Home extends Component {
	render () {
		return (
			<div>
				<div>
					<button className="btn btn-success float-right" onClick={this.props.onGetTracks}>Get tracks</button>
					<div className="clearfix mb-3"></div>
				</div>
				<div>
					<input
						className="form-control"
						type="text" ref={( input ) => {
						this.trackInput = input
					}}/>
					<div className="clearfix mb-3"></div>
					<button className="btn btn-success float-right" onClick={this.addTrack.bind ( this )}>Add track</button>
				</div>
				<div className="clearfix mb-3"></div>
				<div>
					<input
						className="form-control"
						onChange={this.findTrack.bind ( this )}
						type="text" ref={( input ) => {
						this.searchInput = input
					}}/>
					<div className="clearfix mb-3"></div>
					<button className="btn btn-success float-right" onClick={this.findTrack.bind ( this )}>Find track</button>
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