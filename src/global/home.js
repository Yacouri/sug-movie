import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../actions/movie'
import HeaderTitle from '../components/headerTitle'
// import SearchMovie from '../components/searchMovie'
//import PopularActors from '../components/Actors/PopularActors'
//import PopularMovies from '../components/Movies/PopularMovies'
import TrendingMovies from '../components/Movies/TrendingMovies'
import Footer from './footer'

const Home = () => {
    const { movies } = useSelector(state=> state.movie)
    //const actorsData = useSelector(state=> state.movie)
    //const popularMoviesData = useSelector(state => state.movie)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovies())
    },[dispatch])
    return (
        <div>
            <HeaderTitle />
            {/*
            <SearchMovie />
            */}
            <h2 className="top-10">Top rated 💯</h2>
            <TrendingMovies movies_data={movies}/>
            <h2 className="top-10">Popular actors 🎭</h2>
            {/*<PopularActors popular_actors={actorsData}/>
            <h2 className="top-10">Popular movies 🎬</h2>
            <PopularMovies movies_data={popularMoviesData}/>*/}
            <Footer />
        </div>
    )
}

export default Home;    