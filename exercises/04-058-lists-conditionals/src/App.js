import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';

/*
01. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
02. Create a new component (=> ValidationComponent) which receives the text length as a prop
03. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
04. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
05. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
06. When you click a CharComponent, it should be removed from the entered text.
*/

class App extends Component {
  state = {
    inputTextLength: 0,
  };

  render() {
    return (
      <div className="App">
        <input onChange={(event) => {this.setState({inputTextLength: event.target.value.length})}}/>
        <p>
          {this.state.inputTextLength}
        </p>
        <ValidationComponent textLength={this.state.inputTextLength}/>
      </div>
    );
  }
}

export default App;
