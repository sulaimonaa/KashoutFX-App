import React, { useState } from 'react'
import Logo from '../assets/images/logo192.png'
import Menu from '../assets/images/menu.png'
import Cancel from '../assets/images/cancel.png'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
    const [displayNav, setDisplayNav] = useState(true)

    const navigate = useNavigate()

   function returnHome() {
        navigate('/')
    }
    function openNav() {
        setDisplayNav(false)
    }
    function cancelDis() {
        setDisplayNav(true)
    }
  return (
    <div>
    <div className='py-2 bg-dark'>
        <div className='container d-flex justify-content-center'>
            <div className='brand'>
                <img src={Logo} alt='logo' className='w-25' onClick={returnHome}/>
            </div>
            <div><img src={Menu} alt='menu icon' className='menu-btn' onClick={openNav}/></div>
        </div>
    </div>
    <div className={displayNav ? "d-none" : "position-absolute w-75 bg-light bg-opacity-75 vh-100 top-0 gap-2 px-2 pt-10" }>
        <div className='d-flex flex-column'>
        <div className='text-end mt-3 mb-5'><img src={Cancel} alt='cancel icon' onClick={cancelDis} className='cancel-btn'/> </div>
        <Link to='/cent-account' className='mb-3 text-decoration-none text-white fw-bold bg-secondary py-2 rounded px-2'>Open Cent Account</Link>
        <Link to='/usd-account' className='mb-3 text-decoration-none text-white fw-bold bg-secondary py-2 rounded px-2'>Open USD Account</Link>
        <Link to='/act-account' className='mb-3 text-decoration-none text-white fw-bold bg-secondary py-2 rounded px-2'>Activate Account</Link>
        <Link to='/referral' className='mb-3 text-decoration-none text-white fw-bold bg-secondary py-2 rounded px-2'>Subscribe As Referral</Link>
        </div>
    </div>
    </div>
  )
}

export default Nav