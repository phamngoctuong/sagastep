import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './../reducers';
import thunk from 'redux-thunk';
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const middlewares = [thunk];
const enhancers = [applyMiddleware(...middlewares)];
const store = createStore(rootReducer, composeEnhancers(...enhancers));
const configureStore = () => {
	return store;
}
export default configureStore;