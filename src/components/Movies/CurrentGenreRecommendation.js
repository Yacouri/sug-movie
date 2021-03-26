import React, { useEffect } from 'react'
import MoviesCarousel from './MoviesCarousel'
import { fetchCurrentGenreRecommendation } from '../../actions/movie'
import { useDispatch, useSelector } from 'react-redux'


const CurrentGenreRecommendation = ({ current_genre }) =>{
    const dispatch = useDispatch()
    const { movies } = useSelector(state =>state.movie)
    useEffect(()=>{
        dispatch(fetchCurrentGenreRecommendation(current_genre))
    }, [])
    return (
        <div>
            <MoviesCarousel movies_data={ movies } section="Recommendation" />
        </div>
    )
}

export default CurrentGenreRecommendation
