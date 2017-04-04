import React, {Component} from 'react';

class RefsComponent extends Component {

	// подобное навешивание типа реф на инпут, просто получит текущий дом элемент, потом на него можно навесить jquery
	// или что то еще сделать, но реакт не будет про это ничего знать, ref нужно использовать осторожно когда не можем
	// использовать пропс или satate
	render()
	{
		return (
			<div>
				<input placeholder="test" type="text"  ref={(input)=> this.testInput = input}  />
				<button onClick={this.submit.bind(this)}>
					submit
				</button>

			</div>
		)

	}

	submit(){
		// в this.testInput лежит дом элемент инпут так как мы положили его в первым параметром инпут
		console.log('submit', this.testInput.value)
	}

}

export default RefsComponent ;
