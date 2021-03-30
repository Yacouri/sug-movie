const initialState ={
    movies: [],
    download_links : [],
    cast: [],
    genres: [],
    four_k: [],
    selected_genre: null,
    movie_details: {},
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
                cast: action.cast,
                genres: action.genres,
                download_links: action.download_links,
                loading: false
            }
        case 'GET_MOVIE_SUGGESTION':
            return{
                ...state,
                suggestions: action.payload,
                total_results: action.total_results,
                selected_genre: action.selected_genre,
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
        case 'GET_SEARCH_RESULTS':
            return{
                ...state,
                suggestions: action.payload,
                total_results: action.total_results,
                loading: false
            }
        case 'GET_FOUR_K_MOVIES':
            return{
                ...state,
                suggestions: action.payload,
                total_results: action.total_results,
                loading: false
            }
        default:
            return state;
    }
}

export default movieReducer;