import React, { useState } from 'react';

function Contrast() {
  const [isToggled, setIsToggled] = useState(false);

  const darkmode = () => {
    setIsToggled(!isToggled);
    document.body.style.backgroundColor = isToggled ? 'white' : 'black';
  };
  const yellowmode = () => {
    setIsToggled(!isToggled);
    document.body.style.backgroundColor = isToggled ? 'white' : 'yellow';
  };
  const greenmode = () => {
    setIsToggled(!isToggled);
    document.body.style.backgroundColor = isToggled ? 'white' : 'green';
  };
  const bluemode = () => {
    setIsToggled(!isToggled);
    document.body.style.backgroundColor = isToggled ? 'white' : 'blue';
  };


  return (
    <div>
      <button onClick={darkmode}>Dark Mode</button>
      <button onClick={yellowmode}>Yellow Mode</button>
      <button onClick={greenmode}>Green Mode</button>
      <button onClick={bluemode}>Blue Mode</button>
    </div>
  );
}

export default Contrast;