/*import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesSuggestion } from '../actions/movie';
import MoviesWithPagination from '../components/Movies/MoviesWithPagination';

const MovieSuggestion = ()=> {
    const dispatch = useDispatch();
    const { suggestions } = useSelector(state =>state.movie)
    const { total_results } = useSelector(state =>state.movie)
    const { suggested_genres } = useSelector(state =>state.movie)
    useEffect(() =>{
        dispatch(fetchMoviesSuggestion())
    }, [dispatch])

    return (
        <div>
            <MoviesWithPagination 
                pageHeading = 'Movie suggestion'
                movie_data = { suggestions }
                requestFunction = { fetchMoviesSuggestion }
                total_results = { total_results}
                suggested_genre = { suggested_genres }
            />
        </div>
    )
}

export default MovieSuggestion
*/