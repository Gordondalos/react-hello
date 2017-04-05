import React from 'react';

import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';


const HomeF = ( { tracks, onAddTrack, onFindTrack, onGetTracks } ) => {

	let trackInput = '';
	let searchInput = '';

	// эти два метода работают чтобы что то сделать с данными, например чтобы передать их в хранилище redux
	const addTrack = () => {
		console.log ( 'addTrack', trackInput.value );
		onAddTrack ( trackInput.value );
		trackInput.value = '';
	};

	const findTrack = () => {
		console.log ( 'findTrack', searchInput.value );
		onFindTrack ( searchInput.value );
	};

	return (
		<div>
			<div>
				<button className="btn btn-success float-right" onClick={onGetTracks}>Get tracks</button>
				<div className="clearfix mb-3"></div>
			</div>
			<div>
				<input
					className="form-control"
					type="text" ref={( input ) => {
					trackInput = input
				}}/>
				<div className="clearfix mb-3"></div>
				<button className="btn btn-success float-right" onClick={addTrack}>Add track</button>
			</div>
			<div className="clearfix mb-3"></div>
			<div>
				<input
					className="form-control"
					onChange={findTrack}
					type="text" ref={( input ) => {
					searchInput = input
				}}/>
				<div className="clearfix mb-3"></div>
				<button className="btn btn-success float-right" onClick={findTrack}>Find track</button>
			</div>


			<ul>
				{tracks.map ( ( track, index ) =>
					<li key={index}>{track.name}</li>
				)}
			</ul>
		</div>
	);



};
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
) ( HomeF );