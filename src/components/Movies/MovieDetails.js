import React, { useEffect } from 'react'
import SearchMovie from '../searchMovie'
import { useParams } from 'react-router'
import { fetchMovieById, checkMovieImage } from '../../actions/movie'
import { useDispatch, useSelector } from 'react-redux'
//import MovieGenres from './MovieGenres'
//import MovieCredits from './MovieCredits'
//import CurrentGenreRecommendation from './CurrentGenreRecommendation'

const MovieDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { movie_details } = useSelector(state => state.movie)
    //const { actors } = useSelector(state => state.movie)
    //const movies_url = useSelector(state => state.movie.movies_url)
    const renderTrailer = (
        movie_details.movies_url !== null ? 
        <iframe width="100%" height="315" 
            src={'movies_url'}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen>
        </iframe>
        :
        <p className="trailer-error-text">Sorry, <span className="m-name">{movie_details.title}'s</span> trailer not found. </p>
    )
    const renderGenres = movie_details.genres.map((genre, index)=>{
        return (
            <div key={index}>\
                <p>{genre}</p>
            </div>
        )
    })
    useEffect(() => {
        dispatch(fetchMovieById(id))
        
        //dispatch(fetchMoviesVideo(id))
        //dispatch(fetchMovieCredits(id))
    }, [id, dispatch]);

    return (
        <div>
            <SearchMovie />
            <div className="movie-details-wrapper">
                <div className="movie-details">
                <div className="selected-movie-img">
                        <img src={checkMovieImage(movie_details.large_cover_image)} alt="movie img"/>
                    </div>
                    <div className="movie-caption-wrapper">
                        <div className="title">
                            <h3>{movie_details.title}</h3>
                            <span>X</span>
                        </div>
                        <div className="selected-movie-overview">
                            <p className="movie-detail">Overview</p>
                            <p className="movie-detail-value">
                            {movie_details.description_full}
                            </p>
                        </div>
                        <div className="selected-movie-overview">
                                <p className="movie-detail">Genre</p>
                                    {
                                        renderGenres
                                    }
                            </div>
                        <div className="selected-movie-overview">
                            <p className="movie-detail">Released on</p>
                            <p className="movie-detail-value">
                            {movie_details.year}
                            </p>
                        </div>
                        <div className="movie-overview-flex">
                            <div className="selected-movie-overview">
                                <p className="movie-detail">Original language</p>
                                <p className="movie-detail-value">
                                {movie_details.language}
                                </p>
                            </div>
                            <div className="selected-movie-overview">
                                <p className="movie-detail">Rating</p>
                                <p className="movie-detail-value">
                                <span className="good">{movie_details.rating}</span> / 10
                                </p>
                            </div>
                            <div className="selected-movie-overview">
                                <p className="movie-detail">Download count</p>
                                <p className="movie-detail-value">
                                {movie_details.download_count}
                                </p>
                            </div>
                        </div>
                    <button className="watch-movie">Download torrent</button>
                    </div>
                </div>
                <div className="movie-credits">
                    <h1>Actors 🎭</h1>
                    {/*<MovieCredits casters={actors} /> */}
                </div>
                <div className="trailer-wrapper">
                    <h1>Trailer 🎬</h1>
                    {
                        //renderTrailer
                    }
                </div>
                    
                <div className="current-genre-recommendation-wrapper">
                    <h1>Recommendation for X movies 🍿</h1>
                    {/*<CurrentGenreRecommendation current_genre={ genre_id }/>*/}
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;