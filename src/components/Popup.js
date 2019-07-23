import React, {Component} from 'react';

export default class Popup extends Component {
	render() {
		const {popup, popupCloseClick, popupView} = this.props;
		const style = {
			opacity: '1', 
			pointerEvents: 'auto'
		}
		return (
			<div className="popup-wrap"style = {popupView ? style : {}}>
		        <div className="popup">
		            <div className="popup__exit">
		                <div className="popup__empty"></div>
		                <div className="popup__exit-btn" onClick = {popupCloseClick} >X</div>
		            </div>

		            <img src={"https://media.giphy.com/media/"+popup+"/giphy.gif"} />
		        </div>
		        <div className="popup__background"></div>
		    </div>
		)
	}
	
}
