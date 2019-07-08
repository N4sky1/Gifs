import React, {Component} from 'react';

export default class Gif extends Component {
	render() {
		console.log('111',this.props.setData);
		return (
			<div>
			{
				
				this.props.setData.map((gif, index)=>{
					return this.props.setData.length > 25 ?
					<li key = {gif.id} className="gif-container__gif-item" id={index}>
						<img 
						src={"https://media.giphy.com/media/"+gif.id+"/giphy.gif"}  
						className="gif-container__gif-img"/>
					</li>
					: <p>hey, what are ypu doing?</p>
				}) 
				
			}
			</div>
		)
	}
}