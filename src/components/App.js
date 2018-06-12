import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
// import Back from './BackBtn';
// import CurrLevel from './CurrLevel';
// import SelectedTags from './SelectedTags';
        // <Back />
        // <CurrLevel />
        // <SelectedTags />
import data from '../reducers/data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kaymbu TagPicker</h1>
        </header>
        <div>
          <p>Back Btn</p>
          <p>list of current level</p>
          <p>list of selected tags</p>
        </div>
        <ul>
          {
            data.map((item) => { 
              if(item.parent === null) {
                return <li> {item.name} </li>
              }
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
