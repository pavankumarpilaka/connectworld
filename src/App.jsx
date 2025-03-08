import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Myappointments from './pages/Myappointments'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import Influencers from './pages/Influencers'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Influencers' element={<Influencers/>} />
        <Route path='/Influencers/:speciality' element={<Influencers/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<Myprofile/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-appointments' element={<Myappointments/>} />
        <Route path='/appointment/:Infid' element={<Appointments/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App