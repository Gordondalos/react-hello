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

const store = createStore ( playlist );

// подписываемся на изменения в сторе
store.subscribe(()=>{
	console.log('subscribe',store.getState());
});

// изменяем значения в сторе
store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit'});
store.dispatch({type: 'ADD_TRACK', payload: 'хо хо хо'});




// ReactDOM.render (
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App}/>
// 	</Router>,
//
// 	document.getElementById ( 'root' )
// );

