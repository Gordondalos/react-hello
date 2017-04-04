import { createStore } from 'redux';

function playlist(state = [], action) {
	if (action.type === 'ADD_TRACK') {
		return [
			...state,
			action.payload
		]
	}
	return state;
}

const addTrackBtn = document.getElementById('addTrack');
const input = document.querySelector('.trackInput');
const list = document.querySelector('ul');

const store = createStore ( playlist );

// подписываемся на изменения в сторе
store.subscribe(()=>{
	console.log('subscribe',store.getState());
	list.innerHTML='';
	input.value = '';
	store.getState().forEach(track => {
		const li = document.createElement('li');
		li.textContent = track;
		list.appendChild(li);
	})
});

// изменяем значения в сторе
store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit'});


addTrackBtn.addEventListener('click', ()=>{
	const trackName = input.value;
	store.dispatch({type: 'ADD_TRACK', payload: trackName});
});


// ReactDOM.render (
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App}/>
// 	</Router>,
//
// 	document.getElementById ( 'root' )
// );

