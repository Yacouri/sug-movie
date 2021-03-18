import React from 'react'
//import movieImg from '../../images/fight_club.png'
import {Link} from 'react-router-dom'
import {getMoviesGenre, getMovieSlug, getVoteColor} from '../../actions/movie'

const MovieCard = ({movies}) => {
    return (
        <div className="movie-card-wrapper">
            <h2 className="top-10">Top 10</h2>
            <div className="movies">

                {movies.movies.map((movie, index)=>
                    <div className="movie-card" key={index}>
                        <div className="movie-img">
                            <Link to={`/movie/${movie.genre_ids[0]}/${movie.id}/${getMovieSlug(movie.title)}`}>
                                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="movie"/>
                            </Link>
                        </div>
                        <div className="movie-caption">
                            <div className="movie-title">
                                <h3>{movie.title}</h3>
                                <span>{getMoviesGenre(movie.genre_ids[0])}</span>
                            </div>
                            <p className="movie-date">{movie.release_date}</p>
                            <p className="movie-category">Drama</p>
                            <p className="movie-rating">
                                <span className={`rate ${getVoteColor(movie.vote_average)}`}>{movie.vote_average}</span> / 10
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default MovieCard
