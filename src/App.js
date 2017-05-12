import React, { Component } from 'react';

import {Header, Detail, Footer} from './components';
import './App.css';

class App extends Component {

  state = {
    user: {}
  }

  getDataFromGitHub(user='anoopmundathan') {
    const apiUrl = `https://api.github.com/users/${user}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => this.setState({user: data}))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getDataFromGitHub();
  }

  render() {
    return (
      <div className='github-container'>
        <Header user={this.state.user}/>
        <Detail user={this.state.user}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
