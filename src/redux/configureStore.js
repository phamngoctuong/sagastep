import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './../reducers';
import thunk from 'redux-thunk';
import rootSaga from './../sagas';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(...enhancers));
const configureStore = () => {
	sagaMiddleware.run(rootSaga);
	return store;
}
export default configureStore;