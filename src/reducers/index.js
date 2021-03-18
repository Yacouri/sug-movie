import { combineReducers } from "redux";
import movieReducer from "./movie";

const Reducers = combineReducers({ movie: movieReducer });

export default Reducers;