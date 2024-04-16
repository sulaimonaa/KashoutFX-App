// import axios from 'axios' { useEffect, useState } 
import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Nav />
        <div className='top container d-flex flex-column mb-2 mt-4'>
            <h2 className='text-white text-center text-capitalize fw-bold'>3 Sure steps to make money this year </h2>
            </div>
        <div>
        <div className='container rounded'>
    <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/9ginZ5eieBY"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Introduction Video"
        className='rounded'
    ></iframe>
</div>

        </div>
        <div className='container py-4'>
            <div className='mx-auto d-flex gap-2 justify-content-between'>
                <Link to='/cent-account' className='bg-light text-dark text-center rounded text-decoration-none py-2 px-3 ca-btn fw-bold'>Open A Cent Account</Link>
                <Link to='/usd-account' className='bg-light text-dark text-center rounded text-decoration-none py-2 px-3 ca-btn fw-bold'>Open A Dollar Account</Link>
            </div>
        </div>
    </div>
  )
}

export default Home