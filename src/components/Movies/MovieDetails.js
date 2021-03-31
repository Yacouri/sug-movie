import React, { useEffect } from 'react'
import '../../css/movie_details.css'
import SearchMovie from '../searchMovie'
import { useParams } from 'react-router'
import { fetchMovieById, checkMovieImage } from '../../actions/movie'
import { useDispatch, useSelector } from 'react-redux'
import MovieCredits from './MovieCredits'
import CurrentGenreRecommendation from './CurrentGenreRecommendation'

const MovieDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { movie_details, cast, genres, download_links } = useSelector(state => state.movie)

    const renderGenres = genres.map((genre, index)=>{
        return (
            <div key={index}>
                <span>{genre}</span>
            </div>
        )
    })
    const renderDownloadButtons = download_links.map((torrent, index) =>{
        return (
            <div key={index} className="download-wrapper">
                <p>Type: {torrent.type}</p>
                <p>Quality: {torrent.quality}</p>
                <p>Size: {torrent.size}</p>
                <a className="download-movie" href={torrent.url} download>Download</a>
            </div>
        )
    })
    const renderCasters= cast === undefined ? 
    <p className="error-casters">Sorry <span>{movie_details.title}</span> casters not found</p>
    :
    <MovieCredits casters={cast} /> 
    useEffect(() => {
        dispatch(fetchMovieById(id))
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
                        </div>
                        <div className="selected-movie-overview">
                            <p className="movie-detail">Overview</p>
                            <p className="movie-detail-value">
                            {movie_details.description_full}
                            </p>
                        </div>
                        <div className="selected-movie-overview">
                            <p className="movie-detail">Genres</p>
                            <div className="genres-wrapper">
                                { renderGenres }
                            </div>
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
                        <p className="download-text">Downloads</p>
                        <div className="download-links">
                            { renderDownloadButtons }
                        </div>
                    </div>
                </div>
                <div className="movie-credits mt-10">
                    <h1>Actors 🎭</h1>
                    { renderCasters }
                </div>
                <div className="trailer-wrapper mt-10">
                    <h1>Trailer 🎬</h1>
                    <p className="trailer-err">
                        In case the trailer video does not work, try this one 
                        <a href={`https://www.youtube.com/results?search_query=${movie_details.title+' movie trailer'}`}> Click me 🌞</a>
                    </p>
                    <iframe width="100%" height="315"
                    src={`https://www.youtube.com/embed/${movie_details.yt_trailer_code}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                    </iframe>
                </div>
                    
                <div className="current-genre-recommendation-wrapper mt-10">
                    <h1>Recommendation for <span>{ genres[0] }</span> movies 🍿</h1>
                    <CurrentGenreRecommendation current_genre={ id }/>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;