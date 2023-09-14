import { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {

  const arrNumber = [1,2,3,4,5,6]

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError("")
  }

  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className="flex">
      {arrNumber.map((value, i) => (
        <Box 
          isSelected={value == selectedNumber} 
          key={i} 
          onClick={() => numberSelectorHandler(value)}
        >
          {value}
        </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div `

  display: flex;
  flex-direction: column;
  align-items: end;

  .error {
    color: red;
    font-weight: 400;
    margin-bottom: 5px;
  }

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    margin-top: 20px;
    font-weight: 800;
    font-size: 24px;
  }
`

const Box = styled.div `
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  transition: .4s ease-in;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  &:hover {
    background-color: black;
    color: white;
    transition: .3s ease-in;
  }
`