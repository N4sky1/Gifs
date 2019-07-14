import React, {Component} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default class Gif1 extends Component {
	render() {
		return (
			<div>
			{
				this.props.gif1.map((gif, index)=>
					<li key = {gif.id} className="gif-container__gif-item1">
					<LazyLoadImage
				      alt={"gif"}
				      height={(gif.images.fixed_height.height * 300 / gif.images.fixed_height.width)}
				      src={"https://media.giphy.com/media/"+gif.id+"/giphy.gif"} 
				      width={300} 
				      effect="opacity"
				      placeholderSrc={"https://media.giphy.com/media/"+gif.id+"/giphy.gif"} 
				      className="gif-container__gif-img"/>
					</li>
				)
			}
			</div>
		)
	}
}