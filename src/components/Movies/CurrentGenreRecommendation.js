import React, { useEffect } from 'react'
import { fetchCurrentGenreRecommendation, getVoteColor } from '../../actions/movie'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './MovieCard'


const CurrentGenreRecommendation = ({ current_genre }) =>{
    const dispatch = useDispatch()
    const { movies } = useSelector(state =>state.movie)
    
    useEffect(()=>{
        dispatch(fetchCurrentGenreRecommendation(current_genre))
    }, [current_genre, dispatch])

    const renderMovies = movies.map((movie, index)=>{
        return (
            <div key={index}>
                <MovieCard 
                    id={movie.id}
                    genre={movie.genres}
                    slug={movie.slug}
                    poster={movie.medium_cover_image}
                    title={movie.title}
                    release_date={movie.release_date}
                    vote_color={getVoteColor(movie.rating)}
                    vote_average={movie.rating}
                />
            </div>
        )
    })

    return (
        <div className="similar-movies">
            {renderMovies}
        </div>
    )
}

export default CurrentGenreRecommendation
