import UserInput from "./Components/UserInput"
import { useState } from "react"
import Results from "./Components/Results"

const INPUT_VALUES = {
  initialInvestment: 1000,
  annualInvestment: 500,
  expectedReturn: 5,
  duration: 10
}


function App() {
  const [inputValue, setInputValue] = useState(INPUT_VALUES)
  const inputIsValid = inputValue.duration >= 1

  function handleInputChange(inputIdentifier, newValue) {
    setInputValue((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      }

    })
  }
  return (
    <>
      <UserInput changeFunc={handleInputChange} userInput={inputValue} />
    { inputIsValid ? <Results input={inputValue} /> : <p className="center">Please enter a valid duration input</p>}
    </>
  )
}

export default App
