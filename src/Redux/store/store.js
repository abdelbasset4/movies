import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { movieReducer } from '../reducer/MovieReducer'

export const store = createStore(movieReducer,applyMiddleware(thunk))