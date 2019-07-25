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
    },
    preloader: false
  };

  getUrl = search => `https://cors-anywhere.herokuapp.com/` + `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=0Hq9k7VDnzYAqDpFZYbLBtblsp20gugA&limit=10000`;

  getInputValue = () => document.querySelector('.searchForm__input').value;

  render() {
    const { data, searchedText, popup, stylePopup, preloader } = this.state;
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
          preloader = {preloader}
        /> 
      </div>
    );
  }


  openPopup=(opacity, pointEvents)=>{
    let stylePopup = {
      opacity: opacity, 
      pointerEvents: pointEvents
    }
    this.setState(prevState => ({ ...prevState, stylePopup }));
  }
  preloader=(bool)=>{
    const preloader = bool;
    this.setState(prevState => ({ ...prevState, preloader }));
    bool == true ? this.openPopup('1', 'auto') : this.openPopup('0', 'none');
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
    
    this.openPopup('1', 'auto')
  }

  popupCloseClick = (e) =>{
    this.openPopup('0', 'none');
    let popup = {
      id: '',
      height: '',
      width: ''
    }
    this.setState(prevState => ({ ...prevState, popup }));

  }

  inputEvents=()=>{
    const searchedText = this.getInputValue();
    this.setState(prevState => ({ ...prevState, searchedText }));
    this.getStart(this.getUrl(searchedText));
  }

  handlePress = (e) => {
    if (e.key === 'Enter') {
      this.inputEvents()
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    this.inputEvents()
  };

  trendingBtn = (e) => {
      e.preventDefault();
      this.getStart(`http://api.giphy.com/v1/gifs/trending?api_key=0Hq9k7VDnzYAqDpFZYbLBtblsp20gugA&limit=10000`);
    
  };

  getStart = (url) => {
    this.preloader(true);

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
        console.log('load')
        this.preloader(false);
      }) // записываем его в массив
      .catch(function (error) {
        console.log('error', error);
      }); // ошибки связанные с сетью наример связанные с таймаутом
  };

}

export default App;