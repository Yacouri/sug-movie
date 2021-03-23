import React, { useEffect } from 'react'
import { fetchMoviesSuggestion, getMoviesGenre, getMovieSlug, getVoteColor } from '../actions/movie'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../components/Movies/MovieCard'

const MovieSuggestion = ()=> {
    const dispatch = useDispatch();
    const suggestions = useSelector(state =>state.movie)
    useEffect(() =>{
        dispatch(fetchMoviesSuggestion())
    }, [])

    
    return (
        <div>
            <h2 className="top-10">Movie suggestion 🎯</h2>
            <div className="movie-suggestions">
                {suggestions.suggestions.map(movie =>
                    <div className="suggested-movie" key={movie.key}>
                        <MovieCard 
                            genre_id={movie.genre_ids[0]}
                            genre={getMoviesGenre(movie.genre_ids[0])}
                            id={movie.id}
                            slug={getMovieSlug(movie.title)}
                            poster={movie.poster_path}
                            title={movie.title}
                            release_date={movie.release_date}
                            vote_color={getVoteColor(movie.vote_average)}
                            vote_average={movie.vote_average}
                            section="Suggestion"
                        />
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default MovieSuggestion