import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

/*
01. Create TWO new components: UserInput and UserOutput
02. UserInput should hold an input element, UserOutput two paragraphs
03. Output multiple UserOutput components in the App component (any paragraph texts of your choice)
04. Pass a username (of your choice) to UserOutput via props and display it there
05. Add state to the App component (=> the username) and pass the username to the UserOutput component
06. Add a method to manipulate the state (=> an event-handler method)
07. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
08. Ensure that the new input entered by the user overwrites the old username passed to UserOutput
09. Add two-way-binding to your input (in UserInput) to also display the starting username
10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
*/

class App extends Component {
  state = {
    username: 'wshakespeare',
    password: '2b|!2b',
  };

  inputChangeHandler = (event) => {
    this.setState({username: event.target.value});
    setTimeout(() => {console.log(this.state);}, 0);
  };

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid',
      font: 'inherit',
      margin: '8px auto',
      padding: '8px',
      width: '128px',
    };

    return (
      <div className="App">
        <UserOutput username='Horatio'/>
        <UserOutput username={this.state.username}/>
        <UserInput
          onChange={this.inputChangeHandler}
          style={style}
          username={this.state.username}
        />
      </div>
    );
  }
}

export default App;
