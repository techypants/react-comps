import React, { useState } from "react";

function RadioButtons() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [on, setOn] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setOn(true);
  };

  const getRadioBg = (option) => {
    return on && selectedOption === option ? { backgroundColor: 'black', color: 'white' } : {};
  };

  return (
    <div>
      <label style={getRadioBg("option1")}
        className="bg-slate-300 m-4 p-2 rounded-md text-black "
        >
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleRadioChange}
          className="p-2 h-5 w-16"
        />
        Option 1
      </label>

      <label style={getRadioBg("option2")}
        className="bg-slate-300 m-4 p-2 rounded-md text-black "
        >
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleRadioChange}
          className="p-2 h-5 w-16"
        />
        Option 2
      </label>

      <label style={{ ...getRadioBg("option3")}}
        className="bg-slate-300 m-4 p-2 rounded-md text-black "
      >
        <input
          type="radio"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleRadioChange}
          className="h-5 p-2 w-10 m-auto"
        />
        Option 3
      </label>

      
    </div>
  );
}

export default RadioButtons;
