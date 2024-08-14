import React from 'react';
import Button from '../Utails/Button'; 

function Buttons() {
  return (
    <div className='flex flex-col gap-2' >
      <Button variant="primary"  /> 
      <Button variant="secondary"  /> 
      <Button variant="third"  /> 
    </div>
  );
}

export default Buttons;


