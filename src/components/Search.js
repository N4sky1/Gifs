import React, {Component} from 'react';

export default class ArticleList extends Component {
	render() {
		const {urlRequestText, handlePress, handleClick} = this.props
		return (
			<div>
				<form>
					<input 
						type="text" 
						className="input"
						onKeyPress={handlePress}/>
					<button onClick={handleClick}>Go!</button>
				</form>
			</div>
		)
	}
	
}
