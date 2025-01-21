import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const removeInput = () => setInputValue("");

  return (
    <>
      <h1 className="text-3xl md:text-5xl text-white font-bold text-center mt-8 md:mt-16">
        Input Mirror
      </h1>
      <div className="bg-gray-400 mt-16 md:mt-48 p-4 md:p-8 mx-auto max-w-lg rounded-lg">
        <input
          type="text"
          className="bg-pink-500 text-lg md:text-2xl text-white rounded-md p-2 w-full"
          value={inputValue}
          onChange={handleChange}
          placeholder="Say something..."
        />
        <p className="bg-gray-800 text-white mt-4 md:mt-8 p-2 rounded-md">
          Typing: {inputValue}
        </p>
        <button
          className="bg-pink-500 text-white p-2 md:p-3 rounded-md mt-4 md:mt-8 mb-4 w-full"
          onClick={removeInput}
        >
          Remove Value
        </button>
      </div>
    </>
  );
};

export default App;
