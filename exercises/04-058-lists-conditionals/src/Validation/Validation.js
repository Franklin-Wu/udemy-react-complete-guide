import React from 'react';
import './Validation.css'

const validation = (props) => {
  return (
    <div className='Validation'>
        {props.textLength >= 5 ? 'Text long enough' : 'Text too short'}
    </div>
  );
};

export default validation;
