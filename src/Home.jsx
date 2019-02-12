import React from 'react'
import {NavLink} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='main text-white'>
            <h2 className='text-center display-2'>Gregory Kallai</h2>
                <div className='h-75 d-flex flex-column m-2 align-items-center justify-content-between'>
                    <h3 className='m-4 display-4'>Full Stack Developer</h3>
                    <div className='w-100 d-flex justify-content-around m-4'>
                        <NavLink
                        className='btn btn-outline-light btn-lg'
                        to='/projects'>
                            Projects
                        </NavLink>
                        <NavLink
                        className='btn btn-outline-light btn-lg'
                        to='/about'>
                            About Me
                        </NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Home
