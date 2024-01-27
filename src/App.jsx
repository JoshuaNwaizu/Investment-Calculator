import UserInput from "./Components/UserInput"
import { useState } from "react"
import Results from "./Components/Results"

const INPUT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 5000,
  expectedReturn: 5,
  duration: 10
}

function App() {
  const [inputValue, setInputValue] = useState(INPUT_VALUES)

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
      <Results input={inputValue} />
    </>
  )
}

export default App
