import React, { Component } from 'react';
import {CardList} from './Components/list-card/card-list.component'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
        users:[]
    };
  }

componentDidMount (){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState ( {users : users }));
}

  render(){
    return (
      <div className="App">
      <CardList users={this.state.users} />
    </div>
    );
  }
}

export default App;
