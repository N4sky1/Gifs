import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import GifList from './components/GifList';
import Popup from './components/Popup';

class App extends Component {
  state = {
    searchedText: '',
    data: [],
    popup:[],
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
    const popup = e.target.id;
    this.setState(prevState => ({ ...prevState, popup }));

    let stylePopup = {
      opacity: '1', 
      pointerEvents: 'auto'
    }
    this.setState(prevState => ({ ...prevState, stylePopup }));
  }
  popupCloseClick = (e) =>{
    let stylePopup = {
      opacity: '0', 
      pointerEvents: 'none'
    }
    this.setState(prevState => ({ ...prevState, stylePopup }));
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