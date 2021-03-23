import React from 'react'
import FeatherIcon from 'feather-icons-react'

const SearchMovie = () => {
    return (
        <div className="search-movie-wrapper">
            <div className="search-movie">
                <form>
                    <div>
                        <select defaultValue="Choose your movie's category" className="search">
                            <option>1</option>
                            <option>2</option>
                        </select>
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
