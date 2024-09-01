import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(80);

  function onWeightChange(event) {
      setWeight(event.target.value)
  }

  function onHeightChange(event){
      setHeight(event.target.value)
  }
  const output = useMemo(() => {
    const calculateHeight = height /100;
    return(weight/ (calculateHeight*calculateHeight)).toFixed(1)

  },[weight,height])




  return (
    <main>
      <h1>
        BMI Calculator
      </h1>
      <div className='inputSection'>
      <p className='sliderOutput'>Weight:{weight}</p>
      <input 
      className='inputSlider' 
      type='range' 
      step='1' 
      min='40' 
      max='200'
      onChange={onWeightChange} />

      <p className='sliderOutput'> Height: {height}cm</p>
      <input 
      className='inputSlider'
      type='range'
      min='100'
      max='270'
      onChange={onHeightChange} />

      <div className='outputSection'>
      <p>Your BMI is</p>
      <p className='output'>{output}</p>
         
      </div>


      

      </div>

      <div>
        <img src='https://imgs.search.brave.com/HK094T4M05SXToYTCtfcXdK2ax_iB6FjqTNz1kofflk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzY0Lzc5LzUx/LzM2MF9GXzU2NDc5/NTE5MV9WU0FPbGRR/Vmg0eTBuMXp1eEtO/ODVvS25HSlpQak1o/bi5qcGc' alt='BMI Scale' className='bmiImage'></img>
      </div>
    </main>
  )
}

export default App