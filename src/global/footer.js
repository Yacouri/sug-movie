import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <Link to="/" className="footer-logo f-link">Sugmovie</Link>
                <Link to="/home" className="footer-link f-link">Home</Link>
                <Link to="/top-movies" className="footer-link f-link">Top movies</Link>
                <Link to="/movie-suggestion" className="footer-link f-link">Movie suggestion</Link>
                <Link to="/contact-us" className="footer-link f-link">Contact us</Link>
            </div>
            <div className="copyright">
                Copyright 2021 ~ Sugmovie
            </div>
        </div>
    )
}

export default Footer
