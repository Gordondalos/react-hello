import React, { Component } from 'react';


import {css} from 'aphrodite/no-important';
import styles from './appStyles';

class About extends Component {
	render () {
		return (
			<div className={css(styles.container)}>
				Крутое приложение
			</div>
		)
	}
}
export default About;