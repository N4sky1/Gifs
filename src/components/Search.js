import React, {Component} from 'react';

export default class ArticleList extends Component {
	render() {
		const {handlePress, handleClick, trendingBtn} = this.props
		return (
			<div>
				<form className="searchForm">
					<div className="searchForm__search">
						<input 
							type="text" 
							className="searchForm__input"
							onKeyPress={handlePress}/>
						<button className="searchForm__go-btn searchForm__button" onClick={handleClick}>Go!</button>
					</div>
					<button className="searchForm__tranding-btn searchForm__button" onClick={trendingBtn}>Tranding!</button>
				</form>
			</div>
		)
	}
	
}
