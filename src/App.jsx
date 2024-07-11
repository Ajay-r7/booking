import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Rooms from './pages/Rooms'
import Booking from './pages/Booking'

function App() {


  return (
    <>
      <Routes>
        
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/booking' element={<Booking/>}/>
      </Routes>
    </>
  )
}

export default App
