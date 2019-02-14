import React from 'react'
import { NavLink } from 'react-router-dom'
import './About.css'

function About() {
    return (
        <div className='about page'>
        <h1 className='p-5 text-white'>Hello World</h1>
        <div className='p-4 d-flex justify-content-between'>
            <div className='card w-50'>
                <h4 className='card-header pl-4 mb-4'>I am Greg, a warehousing/production line manager turned into software developer. </h4>
                <h5 className='pl-4 pb-2'>I am passionate about coding, I love the chase of the perfect solution and the neverending cycle of improvements and learnings.</h5>
                <h5 className='pl-4 pb-2'>I develop in TDD using the agile methodology, and prefer pair programing.</h5>
                <h5 className='pl-4 pb-2'>If I peeked your interest do not hesitate to contact me via: 
                <a className='pl-4 text-center' href="https://www.linkedin.com/in/greg-kallai/" target='_blank'>
                    <img style={{height: '40px'}} src="https://www.eshopista.cz/orig-image/6a7fdd1136.png" alt=""/>
                </a></h5>
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
