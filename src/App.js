import React, { Component } from "react";
import Navbar from "./layout/Navbar";
//import UserItem from './users/UserItem';
import Users from "./users/Users";
import Contact from "./Pages/Contact";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Users />
            </div>
        </div>
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}
export default App;