import React, { useEffect } from 'react'
import SearchMovie from '../searchMovie'
import { useParams } from 'react-router'
import { fetchMovieById, fetchMoviesVideo, getMoviesGenre, getMovieLanguage } from '../../actions/movie'
import { useDispatch, useSelector } from 'react-redux'

const MovieDetails = () => {
    const {id, genre_id} = useParams()
    //const [movieData, setMovie] = useState({})
    const dispatch = useDispatch()
    const movie = useSelector(state => state.movie)
    //const lang = useSelector(state => state.movie.movie_details.spoken_languages[0].english_name)
    const movies_url = useSelector(state => state.movie.movies_url)
    useEffect(() => {
        //fetchMovieById(id)
        dispatch(fetchMovieById(id))
        dispatch(fetchMoviesVideo(id))
    }, []);
    return (
        <div>
            <SearchMovie />
            <div className="movie-details-wrapper">
                <div className="movie-details">
                    <div className="selected-movie-img">
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.movie_details.poster_path}`} alt="movie img"/>
                    </div>
                    <div className="movie-caption-wrapper">
                        <div className="title">
                            <h3>{movie.movie_details.title}</h3>
                            <span>{getMoviesGenre(parseInt(genre_id))}</span>
                        </div>
                        <div className="selected-movie-overview">
                            <p className="movie-detail">Overview</p>
                            <p className="movie-detail-value">
                            {movie.movie_details.overview}
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
                            {movie.movie_details.release_date}
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
                                <span className="good">{movie.movie_details.vote_average}</span> / 10
                                </p>
                            </div>
                            <div className="selected-movie-overview">
                                <p className="movie-detail">Popularity</p>
                                <p className="movie-detail-value">
                                {movie.movie_details.popularity}
                                </p>
                            </div>
                        </div>
                    <button className="watch-movie">Watch</button>
                    </div>
                </div>
                <iframe width="100%" height="315" 
                    src={movies_url}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default MovieDetails;