import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white border-bottom p-3">
        <div className="container-fluid d-flex">
            <NavLink to='' className="navbar-brand bold scaler d-inline-block align-text-top fs-5">
                <img src="/logo512.png" alt="Logo" width='30' height='30'/>
                React course!
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav text-center mt-2 mt-md-0" id="navbar">
                    <li className="nav-item">
                        <NavLink 
                            className={({ isActive }) => isActive ?
                                'nav-link bold' : 'nav-link'
                            }
                            to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({ isActive }) => isActive ?
                                'nav-link bold' : 'nav-link'
                            } 
                            to='/contact'>
                                Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link disabled scaler " to='/disabled'>React + Bootstrap</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar