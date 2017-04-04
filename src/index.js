import  React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers';


// делаем стор, сразу подключаем его к хрому как расширение вот этим __REDUX_DEVTOOLS_EXTENSION__
// const store = createStore ( reduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ () );
// для того чтобы можно было работать с асинхронными ивентами пишем так
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDom.render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById ( 'root' )
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




