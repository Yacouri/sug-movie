import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClickedPageResults, fetchSearchResults, getMoviesGenre, getMovieSlug, getVoteColor } from '../../actions/movie';
import FeatherIcon from 'feather-icons-react'
import Pagination from 'react-js-pagination';
import MovieCard from './MovieCard'

const SearchMovieResults = ()=> {
    const [activePage, setActivePage] = useState(1);
    const dispatch = useDispatch();
    const { genre_id } = useParams()
    const { suggestions } = useSelector(state =>state.movie)
    const { total_results } = useSelector(state =>state.movie)

    useEffect(() =>{
        dispatch(fetchSearchResults(genre_id))
    }, [])

    const renderMovies = suggestions.map(movie =>{
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
    })
    return (
        <div>
            <div className="suggestion-wrapper">
                <h2>Search Results 🔍</h2>
            </div>
            <div className="movie-suggestions">
                {renderMovies}
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
                        console.log(page_number)
                        dispatch(fetchClickedPageResults(page_number, genre_id))
                    }}
                />
            </div>
        </div>
    )
}

export default SearchMovieResults