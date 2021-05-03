import React, { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import { Global } from './GlobalStateContextHook';

class App extends Component {
  render() {
    return (
      <Global Root={() =>  
      <Router>
        <div className="App">
          <div className='container'>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>} />
    );
  }
}

export default App;
