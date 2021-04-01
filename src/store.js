import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'

const middleware = applyMiddleware(thunk)
export let store = createStore(Reducers, middleware)