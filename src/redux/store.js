import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { usersReducer } from './usersReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({usersReducer, form:formReducer}); 
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;