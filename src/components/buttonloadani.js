import React, { useState } from "react";
import './buttonload.css';

function ButtonLoadAnimation() {
  const [isLoad, setIsLoad] = useState(false);

  function load() {
    setIsLoad(true);
    setTimeout(() => {
        setIsLoad(false);
    },2000)
  }

  return (
    <div>
      <button
        className="w-30 p-2 m-10 bg-blue-500 text-white rounded-xl"
        onClick={load} 
      >
        {isLoad ?
        (<div id='loader' className="w-10 h-10 rounded-full border-t-red-600  border-2 m-auto animate-spin"></div>)
        :("Button Load")
    }
      </button>
    </div>
  );
}

export default ButtonLoadAnimation;
