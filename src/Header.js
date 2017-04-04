import React, { Component, PropTypes } from 'react';


class Header extends Component {

	// это свойство говорит что сюда в обязательном порядке  (isRequired) должен быть передан массив,
	// данное свойство валидирует данные котоыре должны быть переданы, если оно описано
	static propTypes = {
		// ожидаем получить от родителя массив и он обязателен
		items: PropTypes.array.isRequired,
		// ожидаем получить bool и он не обязателен
		isLoading: PropTypes.bool,
		// ожидаем получить функцию от родителя и она обязательная
		submit: PropTypes.func.isRequired,
		// ожидаем получить свойство title типа стринг обязательно
		title: PropTypes.string.isRequired,
		// ожидаем получить типы которые валидны и совпадают или с news или с photos
		type: PropTypes.oneOf(['news', 'photos']),
		// хотим получить обьект с именем типа стринг и возраста типа число
		user: PropTypes.shape({
			'name': PropTypes.string,
			'age': PropTypes.number
		}),
		// хотим провалидировать массив пользователей
		users: PropTypes.arrayOf(
			PropTypes.shape({
				'name': PropTypes.string,
				'age': PropTypes.number
			}),
		)

	};


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
