import React, { useEffect } from 'react'
import SearchMovie from '../searchMovie'
import { useParams } from 'react-router'
import { fetchMovieById, getMoviesGenre } from '../../actions/movie'
import { connect } from 'react-redux'

const MovieDetails = ({movie, fetchMovieById}) => {
    const {id, genre_id} = useParams()
    //const [movie, setMovie] = useState({})
    useEffect(() => {
        fetchMovieById(id)
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
                            <p className="movie-detail">Released on</p>
                            <p className="movie-detail-value">
                            {movie.movie_details.release_date}
                            </p>
                        </div>
                        <div className="movie-overview-flex">
                            <div className="selected-movie-overview">
                                <p className="movie-detail">Category</p>
                                <p className="movie-detail-value">
                                {getMoviesGenre(parseInt(genre_id))}
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
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        movie: state.movie
    }
}
const mapDistapchToProps = (dispatch) =>{
    return {
        fetchMovieById: (id) => dispatch(fetchMovieById(id))
    }
}

export default connect(mapStateToProps, mapDistapchToProps)(MovieDetails);