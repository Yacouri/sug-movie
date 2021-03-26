import React, { useState }from 'react'
import FeatherIcon from 'feather-icons-react'
import movie_genres from '../api/movie_genres.json'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

const SearchMovie = () => {
    const renderGenres = movie_genres.map(genre =>{
        return (
            <option value={genre.id} key={genre.id}>{genre.name}</option>
            )
        })
    const [selectedGenre, setSelectedGenre] = useState();
    const getSelectedGenre = (e) =>{
        const selected_genre = e.target.value
        setSelectedGenre(selected_genre)
    }
    return (
        <div className="search-movie-wrapper">
            <div className="search-movie">
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    <div>
                        <select defaultValue="Choose your movie's category" className="search" onChange={getSelectedGenre}>
                            <option disabled >Choose your movie's category</option>
                            {renderGenres}
                        </select>
                        <Link to={`/movie/search/${selectedGenre}`} className="search-btn">
                            <FeatherIcon icon="search" color="white" className="search-icon" size={20}/>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchMovie
