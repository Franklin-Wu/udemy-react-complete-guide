import React from 'react';

const userinput = (props) => {
  return (
    <div style={props.style}>
      <input onChange={props.onChange} value ={props.username} />
    </div>
  );
};

export default userinput;
