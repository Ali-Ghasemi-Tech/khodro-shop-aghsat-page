import React, { useState } from 'react'


const Slider = ({sliderValue}) => {
  const [value, setValue] = useState()

  function handelChange(e) {
    const number = e.target.value; 
    setValue(number)
    let numberValue = parseInt(value) 
    sliderValue(numberValue);
  }
  return (
    <div className='flex flex-col justify-center w-full items-center my-11'>
      
      <input id='input'value={value} onChange={handelChange} step="100000" type="range" min="10000000" max="5000000000" className="w-[50%] overflow-visible appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:w-[50%] [&::-webkit-slider-runnable-track]:h-[0.7vw] [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none  [&::-webkit-slider-thumb]:-mt-[1vw]  background-svg hover:cursor-pointer  " 
      />
      
    </div>
  )
}

export default Slider