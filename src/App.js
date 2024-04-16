import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Referral from './components/Referral'
import Cent from './components/Cent'
import Usd from './components/Usd'
import Activate from './components/Activate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/referral' element={<Referral />} />
        <Route path='/cent-account' element={<Cent />} />
        <Route path='/usd-account' element={<Usd />} />
        <Route path='/act-account' element={<Activate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App