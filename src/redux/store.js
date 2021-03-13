import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {rootReducers} from './reducers/reducers'

// const store = createStore(rootReducers);

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk),
  ));


//  export const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());