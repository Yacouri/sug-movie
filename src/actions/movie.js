import axios from 'axios'
import movie_genres from '../api/movie_genres.json'

export const fetchMovies = () =>{
    return (dispatch)=>{
        dispatch(fetchTopMovies())
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            const movies = res.data.results
            dispatch(showTopMovies(movies))
            //console.log(movies)
            //getMoviesGenre(28)
        })
    }
}

export const fetchTopMovies = () =>{
    return {
        type: 'FETCH_TOP_MOVIES'
    }
}

export const showTopMovies = (movies) =>{
    return{
        type: 'SHOW_TOP_MOVIES',
        payload: movies
    }
}
export const getMovieById = (movie) =>{
    return{
        type: 'GET_MOVIE_BY_ID',
        payload: movie
    }
}

export const getMoviesVideo = (video) =>{
    return{
        type: 'GET_MOVIES_VIDEO',
        payload: video
    }
}

export const fetchMovieById = (id) =>{
    return (dispatch)=>{
        dispatch(fetchTopMovies())
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(res =>{
            const movie = res.data
            return dispatch(getMovieById(movie))
            //console.log(movie)
        })
    }
}

export const fetchMoviesVideo = (id) =>{
    return (dispatch) =>{
        dispatch(fetchTopMovies())
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(res =>{
            const movies_url = `https://www.youtube.com/embed/${res.data.results[0].key}`
            dispatch(getMoviesVideo(movies_url))
        })
    }
}

export const getMoviesGenre = (genre_id) =>{
    const genres = movie_genres.filter(genre => genre.id === genre_id);
    return genres[0] ? genres[0].name : 'unknown'
}

export const getMovieLanguage = (lang) =>{
    const result = lang ? lang : 'unknown'
    return console.log(result)
}

export const getMovieSlug = (slug) =>{
    const result = slug.split(' ').join('-');
    return result
}

export const getVoteColor = (vote_average) =>{
    const result = vote_average > 6.9 ? 'good' : 'decent'
    return result
}