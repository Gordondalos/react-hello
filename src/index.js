import  React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';

import reduser from './reducers';




// делаем стор, сразу подключаем его к хрому как расширение вот этим __REDUX_DEVTOOLS_EXTENSION__
const store = createStore ( reduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


// import { createStore } from 'redux';
//
// function playlist(state = [], action) {
// 	if (action.type === 'ADD_TRACK') {
// 		return [
// 			...state,
// 			action.payload
// 		]
// 	}
// 	return state;
// }
//
// const addTrackBtn = document.getElementById('addTrack');
// const input = document.querySelector('.trackInput');
// const list = document.querySelector('ul');
//
// const store = createStore ( playlist );
//
// // подписываемся на изменения в сторе
// store.subscribe(()=>{
// 	console.log('subscribe',store.getState());
// 	list.innerHTML='';
// 	input.value = '';
// 	store.getState().forEach(track => {
// 		const li = document.createElement('li');
// 		li.textContent = track;
// 		list.appendChild(li);
// 	})
// });
//
// // изменяем значения в сторе
// store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit'});
//
//
// addTrackBtn.addEventListener('click', ()=>{
// 	const trackName = input.value;
// 	store.dispatch({type: 'ADD_TRACK', payload: trackName});
// });




