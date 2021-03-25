import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, fetchPopularMovies, fetchPopularActors, fetchMoviesSuggestion } from '../actions/movie'
import HeaderTitle from '../components/headerTitle'
import SearchMovie from '../components/searchMovie'
import PopularActors from '../components/Actors/PopularActors'
import PopularMovies from '../components/Movies/PopularMovies'
import TrendingMovies from '../components/Movies/TrendingMovies'
import Footer from './footer'

const Home = () => {
    const moviesData = useSelector(state=> state.movie)
    const actorsData = useSelector(state=> state.movie)
    const popularMoviesData = useSelector(state => state.movie)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovies())
        dispatch(fetchPopularActors())
        dispatch(fetchPopularMovies())
    },[])
    return (
        <div>
            <HeaderTitle />
            <SearchMovie />
            <h2 className="top-10">Trending movies 💯</h2>
            <TrendingMovies movies_data={moviesData.movies}/>
            <h2 className="top-10">Popular actors 🎭</h2>
            <PopularActors actors_data={actorsData}/>
            <h2 className="top-10">Popular movies 🎬</h2>
            <PopularMovies movies_data={popularMoviesData}/>
            <Footer />
        </div>
    )
}

export default Home;    