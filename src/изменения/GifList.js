import React, {Component} from 'react';

export default class GifList extends Component {
	
	render() {
		console.log('length', this.props.setData.length)
		return (
			<ul>
				{
					this.props.setData.map(gif=>
						<li key = {gif.id}>
							<p>{gif.id}</p>
						</li>
					)
				}
				<p>ddddd</p>
			</ul>
		)
	}
}