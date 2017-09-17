import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/ButtonComponent';
import Posts from './Posts/Posts';
import ReduxDemo from './ReduxDemo/ReduxDemo';

var request = require('superagent');

class App extends Component {



  constructor(){
    super();

    this.state = {
      posts: []
    }

  }

  getPosts(){

    request.get('https://jsonplaceholder.typicode.com/posts')
            .end((err, res) => {
              if (err || !res.ok) {
                 alert('Oh no! error');
               } else {
                 //alert('yay got ' + JSON.stringify(res.body));
                 this.setState({posts: res.body});
               }
                });
  }

  componentDidMount(){
    this.getPosts();
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text="Changed"  />
        <ReduxDemo />
        {/*<Posts posts={this.state.posts}/>*/}
      </div>
    );
  }
}

export default App;
