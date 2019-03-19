import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// @reducers
import productState from './product/productState';

const appReducer = combineReducers({
	productState,
	routing: routerReducer,
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;