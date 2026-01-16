import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <span className="brand-text fw-bold">Aayush</span>
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <i className="bi bi-house-door me-1"></i>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                <i className="bi bi-person me-1"></i>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/skills">
                                <i className="bi bi-code-slash me-1"></i>
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">
                                <i className="bi bi-briefcase me-1"></i>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                <i className="bi bi-envelope me-1"></i>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex ms-lg-3">
                        <Link to="/contact" className="btn btn-outline-light btn-sm px-4">
                            Hire Me
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
