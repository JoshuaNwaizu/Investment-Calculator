import UserInput from "./Components/UserInput"
import { useState } from "react"
import Results from "./Components/Results"

const INPUT_VALUES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}


function App() {
  const [inputValue, setInputValue] = useState(INPUT_VALUES)
  
  const inputIsValid = inputValue.duration >= 1
  const initVal = inputValue.initialInvestment >= 1 || inputValue === ''

  function handleInputChange(inputIdentifier, newValue) {
    setInputValue((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue === 0 || newValue ==='' ? '' : +newValue 
      }

    })
  }
  return (
    <>
      <UserInput changeFunc={handleInputChange} userInput={inputValue} />
      {initVal && inputIsValid
        ? <Results input={inputValue} />
        : <p className="center">Please enter a valid input</p>}
    </>
  )
}

export default App
