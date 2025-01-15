import React, { useState } from 'react'
import './App.css'

const App = () => {
const [inputValue , setInputValue] = useState ("");
const handleChange = (event) => {
    setInputValue (event.target.value);
};
const removeInput = () => setInputValue ("");

  return (
  <>
  <h1 className='text-5xl text-white  font-bold'>Input Mirror</h1>
    <div className='bg-gray-400 mt-48'>
    <input type="text" className='bg-pink-500 text-2xl text-white brounded-md mt-16'
    value={inputValue}
    onChange={handleChange}
    placeholder=' say something....'
    />
    <p className='bg-gray-800 text-white mt-16'> Typing :{inputValue}</p>
    <button className='bg-pink-500 text-white p-3 rounded-md mt-16 mb-12' onClick={removeInput}>remove Value</button>
    </div>
    </>
  );
}

export default App;


