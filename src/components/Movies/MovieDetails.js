import React, { useEffect } from 'react'
import SearchMovie from '../searchMovie'
import { useParams } from 'react-router'
import { fetchMovieById, fetchMoviesVideo, fetchMovieCredits, getMoviesGenre, checkMovieImage } from '../../actions/movie'
import { useDispatch, useSelector } from 'react-redux'
import MovieCredits from './MovieCredits'
import CurrentGenreRecommendation from './CurrentGenreRecommendation'

const MovieDetails = () => {
    const {id, genre_id} = useParams()
    const dispatch = useDispatch()
    const { movie_details } = useSelector(state => state.movie)
    const { actors } = useSelector(state => state.movie)
    const movies_url = useSelector(state => state.movie.movies_url)
    const renderTrailer = (
        movie_details.movies_url !== null ? 
        <iframe width="100%" height="315" 
            src={movies_url}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen>
        </iframe>
        :
        <p className="trailer-error-text">Sorry, <span className="m-name">{movie_details.title}'s</span> trailer not found. </p>
    )
    useEffect(() => {
        dispatch(fetchMovieById(id))
        dispatch(fetchMoviesVideo(id))
        dispatch(fetchMovieCredits(id))
    }, []);

    return (
        <div>
            <SearchMovie />
            <div className="movie-details-wrapper">
                <div className="movie-details">
                <div className="selected-movie-img">
                        <img src={checkMovieImage(movie_details.poster_path)} alt="movie img"/>
                    </div>
                    <div className="movie-caption-wrapper">
                        <div className="title">
                            <h3>{movie_details.title}</h3>
                            <span>{getMoviesGenre(parseInt(genre_id))}</span>
                        </div>
                        <div className="selected-movie-overview">
                            <p className="movie-detail">Overview</p>
                            <p className="movie-detail-value">
                            {movie_details.overview}
                            </p>
                        </div>
                        <div className="selected-movie-overview">
                                <p className="movie-detail">Genre</p>
                                <p className="movie-detail-value">
                                {getMoviesGenre(parseInt(genre_id))}
                                </p>
                            </div>
                        <div className="selected-movie-overview">
                            <p className="movie-detail">Released on</p>
                            <p className="movie-detail-value">
                            {movie_details.release_date}
                            </p>
                        </div>
                        <div className="movie-overview-flex">
                            <div className="selected-movie-overview">
                                <p className="movie-detail">Original language</p>
                                <p className="movie-detail-value">
                                {}
                                </p>
                            </div>
                            <div className="selected-movie-overview">
                                <p className="movie-detail">Rating</p>
                                <p className="movie-detail-value">
                                <span className="good">{movie_details.vote_average}</span> / 10
                                </p>
                            </div>
                            <div className="selected-movie-overview">
                                <p className="movie-detail">Popularity</p>
                                <p className="movie-detail-value">
                                {movie_details.popularity}
                                </p>
                            </div>
                        </div>
                    <button className="watch-movie">Watch</button>
                    </div>
                </div>
                <div className="movie-credits">
                    <h1>Actors 🎭</h1>
                    <MovieCredits casters={actors} />
                </div>
                <div className="trailer-wrapper">
                    <h1>Trailer 🎬</h1>
                    {
                        renderTrailer
                    }
                </div>
                    
                <div className="current-genre-recommendation-wrapper">
                    <h1>Recommendation for {getMoviesGenre(parseInt(genre_id))} movies 🍿</h1>
                    <CurrentGenreRecommendation current_genre={ genre_id }/>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;