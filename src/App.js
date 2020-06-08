import React, { Component } from "react";
import Navigation from "./component/Navigation/Navigation";
import Clarifai from "clarifai";
import Logo from "./component/Logo/Logo";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";
import Rank from "./component/Rank/Rank";
import "./App.css";
import Particles from "react-particles-js";

const app = new Clarifai.App({
  apiKey: "6f4548a8b06348128d2ce603f85001f1",
});

const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 850,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function (response) {
          // do something with response
        },
        function (err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* 
        <ImageLinkForm/>
        <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;
