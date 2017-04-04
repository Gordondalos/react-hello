установка и запуск

    npm install -g create-react-app
    create-react-app hello-world
    cd hello-world
    npm start
    
    
самый простой hello-world

    import React, { Component } from 'react';
    
    
    class App extends Component {
    	render(){
    		return <div>Hello world</div>
    	}
    }
    
    export default App;

бывают типы данных state, props

Props  - данные проброшенные от родителя к ребенку
State - локальные переменные
Refs - позволяет обращаться к конкретному дом элементу, нужен чтобы
 навесить jquery, или получить значение элемента без реакт, вызвать нативный метод например фокус

Пробрасываем данные из родителя к ребенку

у родителя

    import Header from './Header';
    
    const menu = [
    	{'link': '/article', 'label': 'article'},
    	{'link': '/contact', 'label': 'contact'},
    	{'link': '/post', 'label': 'post'},
    ];
    
    class App extends Component {
    	render()
    	{
    		return (
    			<div>
    				<Header items={menu} />
    			</div>
    		)
    
    	}
    }
    
у ребенка

    import React, { Component } from 'react';
    
    
    class Header extends Component {
    	render () {
    		return (
    			<div>
    				{this.props.items.map ( ( item, index ) =>
    					<a href={item.link} key={index}>{item.label}</a>
    				)};
    			</div>
    		)
    
    	}
    }
    
    export default Header;


// для того чтобы перейти в прод режим нужно написать

    npm run build
   
  эта команда строит один ксс и один js, а также подключает их в индкес,
  остается только билд засунуть на сервер
    
// добавляем роутинг

    sudo npm install react-router -- save
