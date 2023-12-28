import './App.css'
import { useContext } from 'react'
import { GameContext } from "./contexts/GameContext"
import Container from './Components/Container/Container'
import LandingPage from './Components/LandingPage/LandingPage' 

function App() {
 
  const { cardsArray } = useContext(GameContext);
 
  return (
    <div className='div'>
        
    { !!cardsArray ? <Container/> : <LandingPage/> }

   </div>
     
  )
}

export default App
