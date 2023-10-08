import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currencyReducer from '../redux/reducers/currencyReducer';

const store = createStore(currencyReducer, applyMiddleware(thunk));

export default store;