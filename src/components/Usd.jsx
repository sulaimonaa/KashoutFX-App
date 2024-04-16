import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
function Usd() {
  return (
    <div>
    <Nav />
    <h1 className='text-white text-center my-4 text-capitalize'>Create Dollar account</h1>
    <div className='container rounded'>
    <iframe
        width="100%"
        height="610px"
        src="https://www.mygtcfx.com/getview?view=register&token=9cAowwwweowwwwww"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Register with a trusted broker"
        className='rounded'
    ></iframe>
</div>
<div className='my-3 container'>
    <p className='text-white text-center'>
        Once you have opened (register) and funded your account, please click on the button below to activate your account!
    </p>
    <div className='w-100 text-center'>
    <Link to='/act-account' className='bg-light text-dark text-center rounded text-decoration-none py-2 px-3 fw-bold'>Activate Account</Link>
    </div>
</div>
</div>
  )
}

export default Usd