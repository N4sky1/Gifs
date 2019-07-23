import React, {Component} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default class Gif4 extends Component {
	render() {
		const {gifClick} = this.props
		return (
			<div>
			{
				this.props.gif4.map((gif, index)=>
					<li key = {gif.id} className="gif-container__gif-item4"
					onClick={gifClick} >
					<LazyLoadImage
				      alt={"gif"}
				      height={(gif.images.fixed_height.height * 300 / gif.images.fixed_height.width)}
				      src={"https://media.giphy.com/media/"+gif.id+"/giphy.gif"} 
				      width={300} 
				      effect="opacity"
				      placeholderSrc={"https://media.giphy.com/media/"+gif.id+"/giphy.gif"} 
				      className="gif-container__gif-img"
				      id= {gif.id}
				      />
					</li>
				)
			}
			</div>
		)
	}
}