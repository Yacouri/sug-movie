import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from '../global/contact';
import Home from '../global/home';
import MovieDetails from './Movies/MovieDetails';
import MovieSuggestion from '../global/movieSuggestion'
import TopMovies from '../global/topMovies'

function Navbar() {
    return (
        <Router>
            <div className="nav-wrapper">
                <nav className="navbar">
                    <div className="logo-wrapper">
                        <h2 className="logo">Sugmovie.</h2>
                    </div>
                    <div className="nav-items">
                        <ul className="ul-items">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home.</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/top-movies" className="nav-link">Trending movies.</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/movie-suggestion" className="nav-link">Movie suggestion.</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-btn-wrapper">
                        <Link to="/contact-us" className="contact-btn">Contact us</Link>
                    </div>
                </nav> 
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/home" exact>
                        <Home />
                    </Route>
                    <Route path="/top-movies" exact>
                        <TopMovies />
                    </Route>
                    <Route path="/movie-suggestion" exact>
                        <MovieSuggestion />
                    </Route>
                    <Route path="/contact-us" exact>
                        <Contact />
                    </Route>
                    <Route path="/movie/:genre_id/:id/:slug" children={<MovieDetails />} />
                </Switch>
            </div>
        </Router>
        
    )
}

export default Navbar