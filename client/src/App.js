import React, { Component } from 'react';
import './App.css';
import Form from './components/form/form';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
       
          <Form />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}
}

export default App;
