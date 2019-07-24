import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import GifList from './components/GifList';
import Popup from './components/Popup';

class App extends Component {
  state = {
    searchedText: '',
    data: [],
    popup:{
      id: '',
      height: '',
      width: ''
    },
    stylePopup: {
      opacity: '0', 
      pointerEvents: 'none'
    }
  };

  getUrl = search => `https://cors-anywhere.herokuapp.com/` + `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=0Hq9k7VDnzYAqDpFZYbLBtblsp20gugA&limit=10000`;

  getInputValue = () => document.querySelector('.input').value;

  render() {
    const { data, searchedText, popup, stylePopup } = this.state;
    return (
      <div className="App">
        <div className="search-wrap">
          <h1>Get your Gifs!</h1>
          <Search
            handlePress={this.handlePress}
            handleClick={this.handleClick} 
            trendingBtn={this.trendingBtn}/>
        </div>
        
        <GifList setData={data} gifClick={this.gifClick}/>
        <Popup 
          popup={popup} 
          popupCloseClick = {this.popupCloseClick}
          stylePopup = {stylePopup}
        /> 
      </div>
    );
  }

  gifClick = (e) => {
    //e = e || window.event;
    //let el = e.target || e.srcElement;
     
    let gifHeight =  e.target.getBoundingClientRect().height;
    let screenWidth =  window.screen.availWidth;
    let screenHeight =  window.screen.availHeight;
    let minScreenValue =  Math.min(screenWidth, screenHeight);
    let wishfulSize =  screenWidth > 500 ? 0.7 : 0.95;
    let popupHeight =  (gifHeight > 300) ? (minScreenValue * wishfulSize) : (minScreenValue * wishfulSize * gifHeight / 300);
    let popupWidth =  (300 / gifHeight * popupHeight);
    
    let popup = {
      id: e.target.id,
      height: popupHeight,
      width: popupWidth
    }
    this.setState(prevState => ({ ...prevState, popup }));
    let stylePopup = {
      opacity: '1', 
      pointerEvents: 'auto'
    }
    this.setState(prevState => ({ ...prevState, stylePopup }));
  }


  componentDidUpdate() {
    console.log(this.state.popup)
  }



  popupCloseClick = (e) =>{
    let stylePopup = {
      opacity: '0', 
      pointerEvents: 'none'
    }
    this.setState(prevState => ({ ...prevState, stylePopup }));
    //const popup = '';
   // this.setState(prevState => ({ ...prevState, popup }));
  }
  handlePress = (e) => {
    if (e.key === 'Enter') {
      const searchedText = this.getInputValue();
      this.setState(prevState => ({ ...prevState, searchedText }));
      this.getStart(this.getUrl(searchedText));
    }
  };
  trendingBtn = (e) => {
      e.preventDefault();
      this.getStart(`http://api.giphy.com/v1/gifs/trending?api_key=0Hq9k7VDnzYAqDpFZYbLBtblsp20gugA&limit=10000`);
    
  };
  handleClick = (e) => {
    e.preventDefault();
    const searchedText = this.getInputValue();
    this.setState(prevState => ({
      ...prevState,
      searchedText,
    }));
    this.getStart(this.getUrl(searchedText));
  };


  getStart = (url) => {
    const status = function (response) {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
      }
      return Promise.resolve(response);
    };
    const json = function (response) {
      return response.json();
    };

    fetch(url)
      .then(status) // отлавливаем ошибку 404 и подобные связанные с сервером
      .then(json) // превращаем body из ответа сервера в json
      .then(({data}) => {
        this.setState(prevState => ({ ...prevState, data }));
      }) // записываем его в массив
      .catch(function (error) {
        console.log('error', error);
      }); // ошибки связанные с сетью наример связанные с таймаутом
  };
}

export default App;