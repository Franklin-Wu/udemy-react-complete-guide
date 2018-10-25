import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>There are more things in heaven and earth, {props.username},</p>
      <p>Than are dreamt of in your philosophy.</p>
    </div>
  );
};

export default userOutput;
