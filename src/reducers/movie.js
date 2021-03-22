const initialState ={
    movies: [],
    movie_details: {},
    movies_url: "",
    popular_movies: [],
    actors : [],
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
        default:
            return state;
    }
}

export default movieReducer;