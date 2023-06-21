import React, { useState } from 'react';

function Contrast() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    document.body.style.backgroundColor = isToggled ? 'white' : 'black';
  };

  return (
    <div>
      <button onClick={handleToggle}>Make it Black</button>
    </div>
  );
}

export default Contrast;