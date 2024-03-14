import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className='navbar-brand' to="#">
                        <img src="assests/img/logo-icon.png" alt="logo" className='logo'/>
                    </Link>
                    <ul className=' navbar-nav  navbar-nav-scroll'>
                        <li className='nav-item'> 
                            <Link className='nav-link fs-6 fw-bold' aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'> 
                            <Link className='nav-link fs-6 fw-bold' to="/Weather">
                                Weather
                            </Link>
                        </li>
                        <li className='nav-item'> 
                            <Link className='nav-link fs-6 fw-bold' to="#">
                                Loader
                            </Link>
                        </li>
                        <li className='nav-item'> 
                            <Link className='nav-link fs-6 fw-bold' to="#">
                                Recent
                            </Link>
                        </li>
                        <li className='nav-item'> 
                            <Link className='nav-link fs-6 fw-bold' to="#" aria-disabled="true">
                                Result
                            </Link>
                        </li>
                        <li className='nav-item'> 
                            <Link className='nav-link fs-6 fw-bold' to="#" aria-disabled="true">
                                Search
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}
