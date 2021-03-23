import React from 'react'
import MoviesCarousel from './MoviesCarousel'


const PopularMovies = ({movies_data})=> {
    return (
        <div>
            <MoviesCarousel movies_data={movies_data.popular_movies} />
        </div>
    )
}

export default PopularMovies
