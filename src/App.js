import "./styles.css";
import React from "react";

// Write an app that picks two random numbers
// presents them to user, and checks the user's
// input of the sum for accuarcy
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxAdden = 100;
    // Include state for both addends, the user response and whether answer is correct
    this.state = {
      x: 0,
      y: 0,
      sum: 0,
      response: "",
      correct: false
    };
  }

  // Generate random addends and store in state
  getAddens(event) {
    let x = Math.ceil(Math.random() * this.maxAdden);
    let y = Math.ceil(Math.random() * this.maxAdden);
    console.log(event, x, y);

    this.setState({ x: x });
    this.setState({ y: y });
    this.setState({ sum: x + y });
  }

  // Get user keystrokes and echo back
  updateResponse(event) {
    this.setState({
      response: event.target.value
    });
  }

  // Check for enter key and check answer
  onKeyPressed(event) {
    if (event.key === "Enter") {
      console.log(event.target.value);
      if (parseInt(event.target.value, 10) === this.state.sum) {
        this.setState({
          correct: true,
          response: ""
        });
        this.getAddens();
      } else {
        this.setState({
          correct: false,
          response: ""
        });
      }
    }
  }
  // Render the page, including display of addends, user input field, button for new
  // addends and label to display if answer is correct or not
  render() {
    return (
      <div className="App">
        <h1>Flashcards</h1>
        <h2>
          {this.state.x} + {this.state.y}
        </h2>
        <button onClick={(event) => this.getAddens(event)}>Next Card</button>
        <div>
          <p>Answer?</p>
          <input
            size="8"
            onChange={(event) => this.updateResponse(event)}
            onKeyPress={(event) => this.onKeyPressed(event)}
            autoFocus={true}
            value={this.state.response}
          ></input>
        </div>
        <div>
          <p>{this.state.correct ? "Correct" : "Incorrect, try again."}</p>
          <p>{this.state.response}</p>
        </div>
      </div>
    );
  }
}
