import React from 'react'
import MoviesCarousel from './MoviesCarousel'

const TrendingMovies = ({ movies_data })=> {
    return (
        <div>
            <MoviesCarousel movies_data={movies_data} section="Trending"/>
        </div>
    )
}

export default TrendingMovies
