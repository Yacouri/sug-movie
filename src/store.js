import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'
import logger from 'redux-logger'

const middleware = applyMiddleware(thunk, logger)
export let store = createStore(Reducers, middleware)