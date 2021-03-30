import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducer'
import signUpReducer from './signUpReducer'
import { composeWithDevTools } from 'redux-devtools-extension';



export const store = createStore(
    combineReducers({ appReducer, signUpReducer }),
    composeWithDevTools(
        applyMiddleware(
            thunk
        ),
    )
)
