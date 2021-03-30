import React, { useState }from 'react'
import FeatherIcon from 'feather-icons-react'
import movie_genres from '../api/movie_genres.json'
import { Link } from 'react-router-dom'

const SearchMovie = () => {
    const renderGenres = movie_genres.map(genre =>{
        return (
            <option value={genre.name} key={genre.id}>{genre.name}</option>
            )
        })
    const [selectedGenre, setSelectedGenre] = useState('Action');
    const getSelectedGenre = (e) =>{
        const selected_genre = e.target.value
        return setSelectedGenre(selected_genre)
    }
    return (
        <div className="search-movie-wrapper">
            <div className="search-movie">
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    <p className="choose-text">Choose your movie's category</p>
                    <div>
                        <select className="search" onChange={getSelectedGenre}>
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
