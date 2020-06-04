import React, { Component } from "react";
import Navigation from "./component/Navigation/Navigation";
import Logo from "./component/Logo/Logo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        {/* 
        <ImageLinkForm/>
        <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;
