import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClickedPageResults, fetchMoviesSuggestion, getVoteColor } from '../actions/movie';
import FeatherIcon from 'feather-icons-react'
import Pagination from 'react-js-pagination';
import MovieCard from '../components/Movies/MovieCard'

const MovieSuggestion = ()=> {
    const dispatch = useDispatch();
    const [activePage, setActivePage] = useState(1);
    const { suggestions, selected_genre, total_results, loading } = useSelector(state =>state.movie)
    //const { total_results } = useSelector(state =>state.movie)
    //const { suggested_genres } = useSelector(state =>state.movie)
    useEffect(() =>{
        dispatch(fetchMoviesSuggestion())
    }, [dispatch])

    const renderSuggestions = suggestions.map((movie, index)=>{
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
        <div>
            <div className="suggestion-wrapper">
                <h2>Suggestions 🚀</h2>
            </div>
            <div className="movie-suggestions">
                {
                    loading ? <p className="loading">🔃 Loading ...</p> : renderSuggestions
                }
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
                    pageRangeDisplayed={3}
                    onChange={(page_number)=>{
                        setActivePage(page_number)
                        dispatch(fetchClickedPageResults(page_number, selected_genre))
                    }}
                />
            </div>
        </div>
    )
}

export default MovieSuggestion
