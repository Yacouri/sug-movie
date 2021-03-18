const initialState ={
    movies: [],
    movie_details: {},
    loading: false
}

const movieReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_TOP_MOVIES':
            return {
                ...state,
                loading: true,
            };
        case 'SHOW_TOP_MOVIES':
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
        default:
            return state;
    }
}

export default movieReducer;