import React, {Component} from 'react';

export default class Popup extends Component {
	render() {
		const {popup, popupCloseClick, popupView, stylePopup} = this.props;
		
		return (
			<div className="popup-wrap" style = {stylePopup} onClick={popupCloseClick} >
		        <div className="popup">
		            <img className="popup__exit-btn" src={require('../img/close.svg')} onClick={popupCloseClick}/>
		            { popup.length >= 1 &&
		            <img src={"https://media.giphy.com/media/"+popup+"/giphy.gif"} /> }
		        </div>
		        <div className="popup__background"></div>
		    </div>
		)
	}
	
}
