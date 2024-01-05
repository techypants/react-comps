
import React, { useState } from 'react';

function ButtonWithLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    
    setIsLoading(true);

   
    setTimeout(() => {
      setIsLoading(false);
      alert('You clicked the button!');
    }, 2000); 
  };

  return (
    <div>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Click Me'}
      </button>
    </div>
  );
}

export default ButtonWithLoading;
