import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../images/profile.jpeg'

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section bg-light py-5">
                <div className="container">
                    <div className="row align-items-center min-vh-100">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <h1 className="display-3 fw-bold mb-3">
                                Hi, I'm <span className="text-primary"><br />Aayush Moradiya</span>
                            </h1>
                            <h2 className="display-6 text-muted mb-4">
                                Frontend Developer(React.js)
                            </h2>
                            <p className="lead mb-4">
                                I build responsive, user-friendly web applications
                                using HTML, CSS, JavaScript, and React.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Link to="/projects" className="btn btn-primary btn-lg px-4 py-2">
                                    View Projects
                                </Link>
                                <Link to="./Aayush_Moradiya_Resume.pdf" className="btn btn-outline-primary btn-lg px-4 py-2">
                                    Download Resume
                                </Link>
                            </div>
                            {/* Social Links */}
                            <div className="social-links mt-4 d-flex gap-3">
                                <a href="https://github.com/ayush0104200" className="text-decoration-none fs-4 text-dark" aria-label="GitHub">
                                    <i className="bi bi-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/aayush-moradiya-07496b284/" className="text-decoration-none fs-4 text-dark" aria-label="LinkedIn">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="https://x.com/Aayush_Moradiya" className="text-decoration-none fs-4 text-dark" aria-label="Twitter">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&to=ayushmoradiya01@gmail.com" target="_blank" className="text-decoration-none fs-4 text-dark" aria-label="Email">
                                    <i className="bi bi-envelope"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 text-center">
                            <div className="profile-image-container">
                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="img-fluid rounded-circle shadow-lg"
                                    style={{ maxWidth: '400px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
