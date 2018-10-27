import React, { Component } from "react";
import CarCard from "./components/CarCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cars from "./cars.json";
import "./App.css";

function random(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    cars,
    clicked: [],
    score: 0,
    highScore: 0
  };

  plusOne = () => {
    this.setState({ score: this.state.score + 1 });
  };

  randomize = () => {
    this.setState({ cars: random(cars) })
  }

  picClicked = id => {
    let clicked = this.state.clicked;
    let score = this.state.score;
    let highScore = this.state.highScore;

    if (clicked.indexOf(id) === -1) {
      clicked.push(id);
      this.plusOne();
      this.randomize();
    } else if (this.state.score === 12) {
      alert("Congrats Einstein!")
      this.setState({
        score: 0,
        clicked: []
      });
    } else {
      this.setState({
        score: 0,
        clicked: []
      });
      alert("Nope, try again!")
    }
    if (score > highScore) {
      this.setState({
        highScore: score
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Pick a Supercar but don't pick it twice! </Title>
        <Title> Score: {this.state.score} High Score: {this.state.highScore}</Title>
        {this.state.cars.map(car => (
          <CarCard
            picClicked={this.picClicked}
            id={car.id}
            key={car.id}
            model={car.model}
            image={car.image}
            make={car.make}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
