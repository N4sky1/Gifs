import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import GifList from './components/GifList';

class App extends Component {
  state = {
    searchedText: '',
    data: [],
  };

  getUrl = search => `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=0Hq9k7VDnzYAqDpFZYbLBtblsp20gugA&limit=25`;

  getInputValue = () => document.querySelector('.input').value;

  render() {
    const { data, searchedText } = this.state;
    return (
      <div className="App">
        <h1>Get your Gifs!</h1>
        <Search
          urlRequestText={searchedText}
          handlePress={this.handlePress}
          handleClick={this.handleClick} />
        <GifList setData={data} />
      </div>
    );
  }

  handlePress = (e) => {
    if (e.key === 'Enter') {
      const searchedText = this.getInputValue();
      this.setState(prevState => ({ ...prevState, searchedText }));
      this.getStart(this.getUrl(searchedText));
    }
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