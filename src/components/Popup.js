import React, {Component} from 'react';

export default class Popup extends Component {
	render() {
		const {popup, popupCloseClick, popupView, stylePopup} = this.props;
		
		let popupSize = {
			screenWidth: window.screen.availWidth,
			screenHeight: window.screen.availHeight,
			minScreenValue: Math.min(this.screenWidth, this.screenHeight),
			wishfulSize: 0.7,
			popupHeight: (popup.height > 300) ? (this.minScreenValue * this.wishfulSize) : (this.minScreenValue * this.wishfulSize * popup.height / 300),
			popupWidth: (300 / popup.height * this.popupHeight),
		} 
		
		return (
			<div className="popup-wrap" style = {stylePopup} onClick={popupCloseClick} >
		        <div className="popup">
			        { popup.id.length >= 1 &&
			        <img className="popup__exit-btn" src={require('../img/close.svg')} onClick={popupCloseClick}/> }

			        { popup.id.length >= 1 && 
			        <img src={"https://media.giphy.com/media/"+popup.id+"/giphy.gif"} width={popup.width} height={popup.height}/> }
		        </div>
		        <div className="popup__background"></div>
		    </div>
		)
	}
	
}
