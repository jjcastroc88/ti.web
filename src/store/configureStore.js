import { applyMiddleware, createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { createBrowserHistory } from 'history';

const enhacers = applyMiddleware(thunk);
const store = createStore(rootReducer, enhacers);
const history = syncHistoryWithStore(createBrowserHistory(), store);

const configureStore = {
  store,
  history
}

export default configureStore;