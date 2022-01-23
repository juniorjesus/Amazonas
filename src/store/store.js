import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { productoReducer } from '../reducers/productoReducer';
import { buscarReducer } from '../reducers/buscarReducer';
import { uiReducer } from '../reducers/uiReducer';
// import {shoppingReducers } from '../reducers/shoppingReducers'
// import { authReducer} from '../reducers/uiReducer'

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    // auth: authReducer,
    login: loginReducer,
    register: registerReducer,
    productos: productoReducer,
    buscar: buscarReducer,
    ui: uiReducer,
    // cart: shoppingReducers,
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
   
)