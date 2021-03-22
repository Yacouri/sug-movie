import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, fetchPopularMovies,  } from '../actions/movie'
import HeaderTitle from '../components/headerTitle'
//import MovieCard from '../components/Movies/MovieCard'
import SearchMovie from '../components/searchMovie'
import PopularActors from '../components/Actors/PopularActors'
import PopularMovies from '../components/Movies/PopularMovies'
import TrendingMovies from '../components/Movies/TrendingMovies'

const Home = () => {
    const moviesData = useSelector(state=> state.movie)
    const popularMoviesData = useSelector(state => state.movie)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovies())
        dispatch(fetchPopularMovies())
    },[])
    return (
        <div>
            <HeaderTitle />
            <SearchMovie />
            <h2 className="top-10">Trending movies 💯</h2>
            <TrendingMovies movies_data={moviesData.movies}/>
            <h2 className="top-10">Popular actors 🎭</h2>
            <PopularActors />
            <h2 className="top-10">Popular movies 🎬</h2>
        </div>
    )
}

export default Home;    