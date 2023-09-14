import styled from 'styled-components'

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src='/images/dices.png' />
      </div>
      <div className='right'>
        <h1>Dice Game</h1>
        <div className='button'>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div `
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .right {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
    .button {
      display: flex;
      justify-content: end;
    }
  }
`

const Button = styled.button `
  background: #000000;
  color: white;
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid transparent;
  cursor: pointer;
  transition: .4s background ease-in;

  &:hover {
    background: transparent;
    border: 2px solid #000000;
    color: #000000;
    outline: none;
    transition: .3s background ease-in;
  }
`