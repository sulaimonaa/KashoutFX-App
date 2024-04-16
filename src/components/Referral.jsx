import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

function Referral() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    // Function to generate a 6-character ID
    function generate6CharID() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < 6; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault();

        // Generate a referral ID
        const referralID = generate6CharID();

        // Prepare data with referral ID
        const data = {
            ...values,
            referral_id: referralID,
        };

        // Send data to server
        axios.post('/add_referral', data)
            .then((res) => {
                navigate('/');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <Nav />
            <h1 className='text-white text-center py-3 text-capitalize'>Become a referral</h1>
            <p className='text-white text-center mt-1 mb-2'> Kindly fill the form below:</p>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-3 text-white d-flex flex-column'>
                    <label className='mb-2'>Name</label>
                    <input
                        type='text'
                        name='name'
                        id='ref-name'
                        placeholder='Enter full name'
                        className='p-2 rounded border-0'
                        required
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                    />
                </div>
                <div className='form-group mb-3 text-white d-flex flex-column'>
                    <label className='mb-2'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter email address'
                        className='p-2 rounded border-0'
                        required
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                    />
                </div>
                <div className='form-group mb-3 text-white d-flex flex-column'>
                    <label className='mb-2'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Enter your password'
                        className='p-2 rounded border-0'
                        required
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                    />
                </div>
                <p className='text-white my-3'>
                    Your referral code will be automatically generated. Share with your referred clients to use when making a purchase.
                </p>
                <div className='w-100 text-end'>
                <input type='submit' className='bg-secondary border-0 rounded py-2 px-4 text-white fw-bold' value='Subscribe As Referral' />
                </div>
            </form>
        </div>
        </div>
    );
}

export default Referral;