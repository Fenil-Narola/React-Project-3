import styled from 'styled-components'

const Buttons = ({ setScore, showRules, setShowRules }) => {

  const resetScore = () => {
    setScore(0)
  }
  
  return (
    <BtnBorder>
      <button onClick={resetScore} className='border'>Reset Score</button>
      <button onClick={() => setShowRules((prev) => !prev)} className='black'>{showRules ? "Hide" : "Show"} Rules</button>
    </BtnBorder>
  )
}

export default Buttons

const BtnBorder = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;

  .border {
    width: 220px;
    height: 44px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 18px;
    font-size: 16px;
    font-weight: 600;
    background: transparent;
    cursor: pointer;
    transition: 0.4s ease-in;
    
    &:hover {
      background: black;
      color: white;
      transition: 0.3s ease-in;
    }
  }
  
  .black {
    width: 220px;
    height: 44px;
    background: black;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 18px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    transition: 0.4s ease-in;
    
    &:hover {
      border: 1px solid black;
      background: transparent;
      color: black;
      transition: 0.3s ease-in;
    }
  }
  `