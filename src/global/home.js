import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies, fetchPopularActors } from '../actions/movie'
import HeaderTitle from '../components/headerTitle'
import MovieCard from '../components/Movies/MovieCard'
import SearchMovie from '../components/searchMovie'
import PopularActors from '../components/Actors/PopularActors'

const Home = ({moviesData, fetchMovies}) => {
    useEffect(() => {
        fetchMovies()
    },[])
    return (
        <div>
            <HeaderTitle />
            <SearchMovie />
            <h2 className="top-10">Trending movies 💯</h2>
            <MovieCard movies={moviesData}/>
            <h2 className="top-10">Popular actors 🎭</h2>
            <PopularActors />
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        moviesData: state.movie
    }
}
const mapDistapchToProps = (dispatch) =>{
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchPopularActors: () => dispatch(fetchPopularActors())
    }
}

export default connect(mapStateToProps, mapDistapchToProps)(Home);    