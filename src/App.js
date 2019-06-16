import React, {Component} from 'react';
import './App.css';
import Search from './components/Search';
import GifList from './components/GifList';

let searchRequest='';
const setData = [];
class App extends Component{
  state = {
    urlRequestText: '',
  }
  
  getRequestBody=(state)=>{
  searchRequest='http://api.giphy.com/v1/gifs/search?q='+{state}+'&api_key=0Hq9k7VDnzYAqDpFZYbLBtblsp20gugA&limit=25'
  console.log('request', searchRequest)
  this.getStart()
  }
  
  componentDidUpdate() {
    console.log('state', this.state.urlRequestText)
    this.getRequestBody(this.state.urlRequestText)
  }/*показывает стэйт после обновления*/
  
  render() {
    return (
      <div className="App">
        <h1>Get your Gifs!</h1>
        <Search 
          urlRequestText={this.state.urlRequestText}
          handlePress = {this.handlePress}
          handleClick = {this.handleClick} />
          <GifList setData = {setData}/>
      </div>
    )
  }

  handlePress =(e)=>{
    if (e.key === 'Enter') {
      this.setState({
        urlRequestText: document.querySelector('.input').value
      })
    }
  }

  handleClick =(e)=>{
    e.preventDefault()
    this.setState({
      urlRequestText: document.querySelector('.input').value
    })
  }

  

  getStart =()=>{
    const status = function(response) {
      if (response.status !==200) {
        return Promise.reject(new Error(response.statusText))
      } return Promise.resolve(response)
    };
    const json = function(response) {
      return response.json()
    };
    
    fetch(searchRequest)
      .then(status) // отлавливаем ошибку 404 и подобные связанные с сервером
      .then(json) // превращаем body из ответа сервера в json
      .then(function(data) {
        setData.push(data);
      }) // записываем его в массив
      .catch(function(error) {
        console.log('error', error)
      }) // ошибки связанные с сетью наример связанные с таймаутом
    console.log('data', setData)
  }
}

export default App;
