import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
        animals:[
          {
            name:'Lion',
            id:'a1'
          },
          {
            name:'Chimpanzee',
            id:'a2' 
          },
          {
            name:'Dog',
            id:'a3' 
          },
          {
            name:'Panda',
            id:'a4'
          },
          {
            name:'Walrus',
            id:'a5' 
          },
          {
            name:'Puppy',
            id:'a6' 
          },
          {
            name:'Turtle',
            id:'a7' 
          },
          {
            name:'Mouse',
            id:'a8' 
          }
        ]
    };
  }

  render(){
    return (
      <div className="App">
      {
        this.state.animals.map((animal)=>(
          <h1 key={animal.id}>{animal.name}</h1>
          
           ))
      }
    </div>
    );
  }
}

export default App;
