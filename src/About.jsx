import React from 'react'
import { NavLink } from 'react-router-dom'
import './About.css'

function About() {
    return (
        <div className='about page text-white'>
        <h1 className='p-4'>Hello World</h1>
        <div className='p-4 d-flex justify-content-between'>
            <div className='textbg'>
                <h4 className='pb-2 w-75'>I am Greg, a warehousing/production line manager turned into software developer. </h4>
                <h4 className='pb-2 w-75'>I am passionate about coding, I love the chase of the perfect solution and the neverending cycle of improvements and learnings.</h4>
            </div>
            <img className='profilepic' src="https://lh3.googleusercontent.com/zzDYC53Id8_rwweUBFSbscOkrH6DcPKrI8Oi6gR6J5nwvo3zEZ4tpxTx-sgrdMe2ehEzVtf3EzuqUqI82zQlSCZ0fVQE6vM7r1A2CsXMue1AW64-mELHZiW_5G6fURsAPgBCANZzsc1yvtM6_EwozBKtVd5xZVmrKJuZrmZxNIAHNXpkrM4p_5A6PCxuh4Qx1p-7O_ZFOdqQXq7sAYhlHe-7F-F4iViIqrg1o7nIBtu2-ZwvqlM_8LORY01vjRrm8407_W-yX2Te8DXYUL_ZD23J7_1Fr1kBJAUYrQAgh0r4eSejnu6-tXgEjq2WI6tjMWOj4pGKDhlsseRVJ9v396TvwRFuTKcgeSstn9YSUj4Je04VcZLOAkwf5d2Qs1YnxXwylMLOZa47TRoclDb46xogTOGLh4qSmc2wDtJ_TBAFCWYSTKY0Gxzi2PyDpTAFkJiOnnBWUZUzVWTeT75Wdic7KSco12zDVQ6xsYEHb7w8dZWPy5X9xPW_8fV23f-rVbbAjSwr2-Wn66E9M0BEiyuBHfNgQyS6nS7WpK0gOKj2Oxn9dHVHKvbZ0FGWy_EcSoP9D6k7NjwQ2-eMLtywTpY37avmFZUMcDSIrmSme6Dscz2CgoRECApc7lLZvaZeYfPPO3mzynKgmdgM6y9K2t55lJFBXUc=w998-h1330-no" alt=""/>
        </div>
        <div className='w-100 d-flex justify-content-around pb-5'>
                    <NavLink
                    className='btn btn-outline-light btn-lg'
                    to='/projects'>
                        Projects
                    </NavLink>
                    <NavLink
                    className='btn btn-outline-light btn-lg'
                    to='/'>
                        About Me
                    </NavLink>
                </div>
        </div>
    )
}

export default About
