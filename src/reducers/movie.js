const initialState ={
    movies: [],
    movie_details: {},
    movies_url: null,
    popular_movies: [],
    suggestions: [],
    suggested_genres: null,
    actors : [],
    total_results: 1,
    loading: false
}

const movieReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_GET_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'GET_TOP_MOVIES':
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case 'GET_MOVIE_BY_ID':
            return {
                ...state,
                movie_details: action.payload,
                loading: false
            }
        case 'GET_MOVIES_VIDEO':
            return {
                ...state,
                movies_url: action.payload,
                loading: false
            }
        case 'GET_POPULAR_ACTORS':
            return {
                ...state,
                actors: action.payload,
                loading: false
            }
        case 'GET_POPULAR_MOVIES':
            return {
                ...state,
                popular_movies: action.payload,
                loading: false
            }
        case 'GET_MOVIE_SUGGESTION':
            return{
                ...state,
                suggestions: action.payload,
                total_results: action.total_results,
                suggested_genres: action.suggested_genres, 
                loading: false
            }
        case 'GET_CLICKED_PAGE_RESULTS':
            return{
                ...state,
                suggestions: action.payload,
                loading: false
            }
        case 'GET_MOVIE_CREDITS':
            return{
                ...state,
                actors: action.payload,
                loading: false
            }
        case 'GET_CURRENT_GENRE_RECOMMENDATION':
            return{
                ...state,
                movies: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default movieReducer;