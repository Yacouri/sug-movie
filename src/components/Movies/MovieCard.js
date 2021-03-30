import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard =({ id, section, genre, slug, poster, title, release_date, vote_color, vote_average }) => {
    const renderGenres = genre.map((g, index) =>{
        return (
            <div key={index}>
                <span className="movie-category">{g}</span>
            </div>
        )
    })
    return (
        <div className="movie-card-wrapper">
            <div className="movie-card">
                <div className="movie-img">
                    <Link to={`/movie/${id}/${encodeURIComponent(slug)}`} target="_top">
                        <img src={poster} alt="movie"/>
                    </Link>
                </div>
                <div className="movie-caption">
                    <div className="movie-title">
                        <h3>{title}</h3>
                        <span className={`${section}`}>{section}</span>
                    </div>
                    <p className="movie-date">{release_date}</p>
                    {renderGenres}
                    <p className="movie-rating">
                        <span className={`rate ${vote_color}`}>{vote_average}</span> / 10
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
