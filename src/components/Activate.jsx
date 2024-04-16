import React from 'react'
import Nav from './Nav'

function Activate() {
  return (
    <div>
        <Nav />
    <h1 className='text-white text-center my-4 text-capitalize'>Activate account</h1>
    <div className='container rounded'>
    <iframe
        width="100%"
        height="610px"
        src="https://gtccopy.com/portal/registration/subscription?redirectUrl=%2F"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Account activation"
        className='rounded'
    ></iframe>
</div>
    </div>
  )
}

export default Activate