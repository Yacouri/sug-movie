import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../actions/movie'
import HeaderTitle from '../components/headerTitle'
import SearchMovie from '../components/searchMovie'
import TrendingMovies from '../components/Movies/TrendingMovies'
import Footer from './footer'

const Home = () => {
    const { movies } = useSelector(state=> state.movie)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovies())
    },[dispatch])
    return (
        <div>
            <HeaderTitle />
            <SearchMovie />
            <h2 className="top-10">Top rated 💯</h2>
            <TrendingMovies movies_data={movies}/>
            <Footer />
        </div>
    )
}

export default Home;    