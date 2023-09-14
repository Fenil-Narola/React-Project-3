import { styled } from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import Buttons from "./Buttons"
import { useState } from "react"
import Rules from "./Rules"

const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const roleDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number")
      return
    }
    const randomNumber = generateRandomNumber(1, 7)
    setCurrentDice((prev) => randomNumber)

    if(selectedNumber == randomNumber) {
      setScore(prev => prev + randomNumber)
    }
    else {
      setScore(prev => prev - 1)
    }

    setSelectedNumber(undefined)
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector 
          error={error} 
          setError={setError} 
          selectedNumber={selectedNumber} 
          setSelectedNumber={setSelectedNumber} 
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="buttons">
        <Buttons setScore={setScore} showRules={showRules} setShowRules={setShowRules} />
      </div>

      {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main `

  padding-top: 70px;

  .top_section {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .buttons {
    margin-top: 36px;
    display: flex;
    justify-content: center;
  }
`