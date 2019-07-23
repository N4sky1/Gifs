import React, {Component} from 'react';
import Gif1 from './Gif1';
import Gif2 from './Gif2';
import Gif3 from './Gif3';
import Gif4 from './Gif4';
import Gif5 from './Gif5';
import Gif6 from './Gif6';

export default class GifList extends Component {
	
	render() {
		const {gifClick} = this.props
		
		let screenWidth = window.screen.availWidth;
		let imgWidth = 300;
		let howManyClasses = Math.floor(screenWidth / imgWidth);
		let imgInArray = Math.floor(this.props.setData.length / howManyClasses);
		
		let copyArr = JSON.parse(JSON.stringify(this.props.setData)); 
		let variable;
		let finalArr = [];
		for (let i = 0; i < howManyClasses; i++) {
			variable = copyArr.splice(0, imgInArray);
			finalArr.push(variable)
		}

		return (
			<div className='gif-container' >
				{ howManyClasses >= 1 &&
				<Gif1 gif1={finalArr[0]} gifClick = {gifClick}/> }

				{ howManyClasses >= 2 &&
				<Gif2 gif2={finalArr[1]} gifClick = {gifClick}/> }
				
				{ howManyClasses >= 3 &&
				<Gif3 gif3={finalArr[2]} gifClick = {gifClick}/> }
				
				{ howManyClasses >= 4 &&
				<Gif4 gif4={finalArr[3]} gifClick = {gifClick}/> }
				
				{ howManyClasses >= 5 &&
				<Gif5 gif5={finalArr[4]} gifClick = {gifClick}/> }
				
				{ howManyClasses >= 6 &&
				<Gif6 gif6={finalArr[5]} gifClick = {gifClick}/> }
			</div>
		)
	}

}