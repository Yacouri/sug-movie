import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movie'
import HeaderTitle from '../components/headerTitle'
import MovieCard from '../components/Movies/MovieCard'
import SearchMovie from '../components/searchMovie'

const Home = ({moviesData, fetchMovies}) => {
    useEffect(() => {
        fetchMovies()
    },[])
    return (
        <div>
            <HeaderTitle />
            <SearchMovie />
            <MovieCard movies={moviesData}/>
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
        fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDistapchToProps)(Home);    