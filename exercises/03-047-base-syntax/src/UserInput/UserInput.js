import React from 'react';

const userInput = (props) => {
  return (
    <div style={props.style}>
      <input onChange={props.onChange} value ={props.username} />
    </div>
  );
};

export default userInput;
