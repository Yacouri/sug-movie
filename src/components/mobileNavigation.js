import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

const MobileNavigation = () =>{
    return (
        <div>
            <div className="mobile-navigation">
                <ul className="ul-items">
                    <div>
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                <FeatherIcon icon="home" color="#fff" size={20} className="home-icon" strok-width={1}/>
                                <p>Home</p>
                            </Link>
                        </li>
                    </div>
                    <div>
                        <li className="nav-item">
                            <Link to="/4k" className="nav-link">
                                <FeatherIcon icon="tv" color="#fff" size={20} className="tv-icon" strok-width={1}/>
                                <p>4K movies</p>
                            </Link>
                        </li>
                    </div>
                    <div>
                        <li className="nav-item">
                            <Link to="/movie-suggestion" className="nav-link">
                                <FeatherIcon icon="shuffle" color="#fff" size={20} className="shuffle-icon" strok-width={1}/>
                                <p>Suggestions</p>
                            </Link>
                        </li>
                    </div>
                    <div>
                        <li className="nav-item">
                            <Link to="/contact-us" className="nav-link">
                                <FeatherIcon icon="mail" color="#fff" size={20} className="mail-icon" strok-width={1}/>
                                <p>Contact</p>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default MobileNavigation
