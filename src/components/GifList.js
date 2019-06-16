import React, {Component} from 'react';

export default class GifList extends Component {
	
	render() {
		let gifsElements;
		if (this.props.setData.length > 0) {
			console.log('проходит')
			gifsElements = this.props.setData[0].data.map((gif, index)=>
				<li key = {gif.id}> 
					<p>{gif.id}</p>
				</li>
			)
		}
		
		const emptyWord = '';
		let renderElement = this.props.setData.length > 0 ? gifsElements : emptyWord;
		console.log('length', this.props.setData.length)
		return (
			<ul>
				{renderElement}
				<p>ddddd</p>
			</ul>
		)
	}

	
}
