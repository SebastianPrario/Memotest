import './App.css'
import { Route, Routes } from 'react-router-dom'
import Container from './Components/Container/Container'
import LandingPage from './Components/LandingPage'
 
function App() {
 
  return (
   
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/container' element={<Container/>}/>
    </Routes>
  
  )
}

export default App
