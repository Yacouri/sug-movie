import axios from 'axios'
import movie_genres from '../api/movie_genres.json'
import moviesImageNotFound from '../images/movies_image_not_found.png'
import casterNotFound from '../images/caster_not_found.png'


// API KEY
const key = process.env.REACT_APP_API_KEY


// FETCHING FUNCTIONS
export const fetchMovies = () =>{
    return (dispatch)=>{
        dispatch(fetchGetRequest())
        const complete_url = `https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=20&genre=${getRandomGenre()}&quality=All&minimum_rating=8`
        //axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
        axios.get(complete_url)
        .then(res => {
            const movies = res.data.data.movies
            return dispatch(getTopMovies(movies))
        })
        .catch(error =>{
            console.warn(error)
        })
    }
}
export const fetchMovieById = (id) =>{
    return (dispatch)=>{
        dispatch(fetchGetRequest())
        const complete_url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
        axios.get(complete_url)
        .then(res =>{
            const movie = res.data.data.movie
            const cast = res.data.data.movie.cast
            const genres = res.data.data.movie.genres
            const torrents = res.data.data.movie.torrents
            return dispatch(getMovieById(movie, cast, genres, torrents))
        })
        .catch(error =>{
            return console.warn(error)
        })
    }
}
export const fetchPopularMovies = () =>{
    return (dispatch) =>{
        dispatch(fetchGetRequest())
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then(res =>{
            const popular_movies = res.data.results
            return dispatch(getPopularMovies(popular_movies))
        })
        .catch(error =>{
            console.warn(error)
        })
    }
}
export const fetchMoviesSuggestion = ()=>{
    return (dispatch) =>{
        const genre = getRandomGenre()
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${genre}&page=1`
        dispatch(fetchGetRequest())
        axios.get(url)
        .then(res => {
            return dispatch(getSuggestionMovie(res.data.results,  res.data.total_results, genre))
        })
        .catch(error =>{
            console.warn(error)
        })
    }
}
export const fetchClickedPageResults =(pageNumber, currentGenre)=>{
    return (dispatch) =>{
        const url = `https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=20&genre=${currentGenre}&quality=All&minimum_rating=All&page=${pageNumber}`
        dispatch(fetchGetRequest())
        axios.get(url)
        .then(res => {
            const search_results = res.data.data.movies
            console.log(search_results)
            return dispatch(getClickedPageResults(search_results))
        })
        .catch(error =>{
            console.warn(error)
        })
    }
}
export const fetchMovieCredits = (id) =>{
    return (dispatch) =>{
        dispatch(fetchGetRequest())
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
        .then(res =>{
            const actors = res.data.cast
            //console.log(actors)
            return dispatch(getMovieCredits(actors))
        })
        .catch(error =>{
            console.warn(console.log(error))
        })
    }
}
export const fetchCurrentGenreRecommendation = (currentGenre) =>{
    return (dispatch) =>{
        dispatch(fetchGetRequest())
        axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${currentGenre}`)
        .then(res =>{
            const recommendation = res.data.data.movies
            return dispatch(getCurrentGenreRecommendation(recommendation))
        })
        .catch(error =>{
            console.warn(error)
        })
    }
}
export const fetchSearchResults = (currentGenre) =>{
    return (dispatch) =>{
        dispatch(fetchGetRequest())
        axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=20&genre=${currentGenre}&quality=All&minimum_rating=Allpage=1`)
        .then(res =>{
            console.log(res.data)
            const search_result = res.data.data.movies
            const total_results = res.data.data.movie_count
            return dispatch(getSearchResults(search_result, total_results))
        })
        .catch(error =>{
            console.warn(error)
        })
    }
}


// FETCHING ACTIONS
export const fetchGetRequest = () =>{
    return {
        type: 'FETCH_GET_REQUEST'
    }
}
export const getTopMovies = (movies) =>{
    return{
        type: 'GET_TOP_MOVIES',
        payload: movies
    }
}
export const getMovieById = (movie, cast, genres, torrents) =>{
    return{
        type: 'GET_MOVIE_BY_ID',
        payload: movie,
        cast: cast,
        genres: genres,
        download_links: torrents
    }
}
export const getPopularMovies = (popular_movies) =>{
    return{
        type: 'GET_POPULAR_MOVIES',
        payload: popular_movies
    }
}
export const getSuggestionMovie = (suggestions, suggested_genres) =>{
    return{
        type: 'GET_MOVIE_SUGGESTION',
        payload: suggestions,
        suggested_genres: suggested_genres
    }
}
export const getClickedPageResults = (pageResults) =>{
    return {
        type: 'GET_CLICKED_PAGE_RESULTS',
        payload: pageResults
    }
}
export const getMovieCredits = (actors) =>{
    return {
        type: 'GET_MOVIE_CREDITS',
        payload: actors
    }
}
export const getCurrentGenreRecommendation = (recommendation) =>{
    return {
        type: 'GET_CURRENT_GENRE_RECOMMENDATION',
        payload: recommendation
    }
}
export const getSearchResults = (search_results, total_results) =>{
    return{
        type: 'GET_SEARCH_RESULTS',
        payload: search_results,
        total_results: total_results
    }
}

// COMPONENT'S FUNCTION
export const getVoteColor = (vote_average) =>{
    const result = vote_average > 6.9 ? 'good' : 'decent'
    return result
}
export const getRandomGenre = () =>{
    const random_genre = movie_genres[Math.floor(Math.random() * movie_genres.length)]
    return random_genre.name
}
export const checkActorImage = (imgPath) => {
    //const actor_gender_img = gender === 1 ? femaleImg : maleImg
    const result = imgPath == null ? casterNotFound : imgPath
    return result
}
export const checkMovieImage = (image) =>{
    const errorImage = moviesImageNotFound
    const result = image === null ? errorImage : image
    return result
}