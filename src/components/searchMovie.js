import React from 'react'
import FeatherIcon from 'feather-icons-react'

const SearchMovie = () => {
    return (
        <div className="search-movie-wrapper">
            <div className="search-movie">
                <form>
                    <div>
                        <input type="text" className="search" placeholder="Choose your movie's category"/>
                        <button type="submit" className="search-btn">
                            <FeatherIcon icon="search" color="white" className="search-icon" size={20}/>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SearchMovie
