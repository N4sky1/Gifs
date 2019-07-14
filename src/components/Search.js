import React, {Component} from 'react';

export default class ArticleList extends Component {
	render() {
		const {handlePress, handleClick, trendingBtn} = this.props
		return (
			<div>
				<form>
					<input 
						type="text" 
						className="input"
						onKeyPress={handlePress}/>
					<button onClick={handleClick}>Go!</button>
					<button onClick={trendingBtn}>Tranding!</button>
				</form>
			</div>
		)
	}
	
}
