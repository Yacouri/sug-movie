import React, { useState } from 'react'
import { fetchClickedPageResults, fetchMoviesSuggestion, getMoviesGenre, getMovieSlug, getVoteColor } from '../actions/movie'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../components/Movies/MovieCard'
import Pagination from 'react-js-pagination';
import FeatherIcon from 'feather-icons-react'

const MovieSuggestion = ()=> {
    const dispatch = useDispatch();
    const { suggestions } = useSelector(state =>state.movie)
    const { total_results } = useSelector(state =>state.movie)
    const { suggested_genres } = useSelector(state =>state.movie)
    const [activePage, setActivePage] = useState(1);

    const newRequest = () =>{
        dispatch(fetchMoviesSuggestion())
        console.log(suggested_genres)
    }
    const renderSuggestions = suggestions.map(movie =>{
            return (
                <div className="suggested-movie" key={movie.id}>
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
            )
        }
    )

    return (
        <div>
            <div className="suggestion-wrapper">
                <h2>Movie suggestion 🎯</h2>
                <button className="suggestion-button" onClick={newRequest}>
                    Suggest movies
                    <FeatherIcon icon="tv" color="#fff" size={20}/>
                </button>
            </div>
            <div className="movie-suggestions">
                {renderSuggestions}
            </div>
            <div className="pagination-wrapper">
                <Pagination
                    nextPageText={<FeatherIcon icon="arrow-right-circle" color="#ffffff" size={20} />}
                    prevPageText={<FeatherIcon icon="arrow-left-circle" color="#ffffff" size={20} />}
                    firstPageText={<FeatherIcon icon="chevrons-left" color="#F03A17" size={20} />}
                    lastPageText={<FeatherIcon icon="chevrons-right" color="#F03A17" size={20} />}
                    
                    itemClass="li-pagination"
                    activeClass="active-ul"
                    activeLinkClass="active-a"
                    linkClass="a-pagination"

                    activePage={ activePage }
                    itemsCountPerPage={20}
                    totalItemsCount={ total_results }
                    pageRangeDisplayed={5}
                    onChange={(page_number)=>{
                        setActivePage(page_number)
                        dispatch(fetchClickedPageResults(activePage, suggested_genres))
                    }}
                />
            </div>
        </div>
    )
}

export default MovieSuggestion