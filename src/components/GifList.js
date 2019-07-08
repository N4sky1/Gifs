import React, {Component} from 'react';
import Gif from './Gif';

export default class GifList extends Component {
	
	render() {
		console.log(this.props.setData);
		console.log('сколько в массиве', this.props.setData.length);
		console.log(window.screen.availWidth);
		let screenWidth = window.screen.availWidth;
		let imgWidth = 305;
		let imgInScreen = Math.floor(screenWidth / imgWidth);
		let howManyClasses = imgInScreen;
		//let resultScreenWidth = imgInScreen * imgWidth - 5; // 5 - лишний margin
		let gifClass = 'gif-container';
		let imgInArray = this.props.setData.length;

		let getGifClass=()=>{
			console.log(document.querySelector('.gif-container__gif-item'));
			
		}
		console.log(imgInScreen)


		getGifClass()
		return (
			<div className={gifClass} >
				<Gif setData={this.props.setData}/>
			</div>
		)
	}
	componentDidMount() {
		
	}
}