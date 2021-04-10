import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger'
import counterReducer from './counter'
import productReducer from './product'

const rootReducer = combineReducers({
    producto: productReducer,
    counter: counterReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
