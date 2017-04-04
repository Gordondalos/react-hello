import React, {Component} from 'react';
import './App.css';

// import Dropdown from './Dropdown';
import Header from './Header';
import Registration from './Registration';
import RefsComponent from './RefsComponent';

const menu = [
	{'link': '/article', 'label': 'article'},
	{'link': '/contact', 'label': 'contact'},
	{'link': '/post', 'label': 'post'},
];

class App extends Component {
	render()
	{
		return (
			<div className="container">
				<Header items={menu} />
				<br/>
				<Registration />
				<br/>
				<RefsComponent/>
			</div>
		)

	}
}

export default App;
