import React, {Component} from 'react';

export default class Popup extends Component {
	render() {
		const {popup, popupCloseClick, popupView, stylePopup, preloader} = this.props;
		
		
		
		return (
			<div className="popup-wrap" style = {stylePopup} onClick={preloader === false && popupCloseClick} >
		        <div className="popup">
			        { popup.id.length >= 1 &&
			        	<img className="popup__exit-btn" src={require('../img/close.svg')} onClick={popupCloseClick}/> }

			        { popup.id.length >= 1 && 
			        	<img src={"https://media.giphy.com/media/"+popup.id+"/giphy.gif"} width={popup.width} height={popup.height}/> }

			        { preloader === true &&
			        	<img className="popup__preloader" src={require('../img/preloader.svg')} /> }
		        </div>
		        <div className="popup__background"></div>
		    </div>
		)
	}
	
}
