import React from 'react';
import './ValidationComponent.css'

const validationComponent = (props) => {
  return (
    <div className='ValidationComponent'>
        {props.textLength >= 5 ? 'Text long enough' : 'Text too short'}
    </div>
  );
};

export default validationComponent;
