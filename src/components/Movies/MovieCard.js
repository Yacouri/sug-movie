import React from 'react'
import { Link } from 'react-router-dom'
import { checkMovieImage } from '../../actions/movie'

const MovieCard =({ id, section, genre_id, genre, slug, poster, title, release_date, vote_color, vote_average }) => {
    return (
        <div className="movie-card-wrapper">
            <div className="movie-card">
                <div className="movie-img">
                    <Link to={`/movie/${genre_id}/${id}/${encodeURIComponent(slug)}`}>
                        <img src={checkMovieImage(poster)} alt="movie"/>
                    </Link>
                </div>
                <div className="movie-caption">
                    <div className="movie-title">
                        <h3>{title}</h3>
                        <span className={`${section}`}>{section}</span>
                    </div>
                    <p className="movie-date">{release_date}</p>
                    <p className="movie-category">{genre}</p>
                    <p className="movie-rating">
                        <span className={`rate ${vote_color}`}>{vote_average}</span> / 10
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
