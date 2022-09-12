import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todosReducer } from './todosReducer';

const rootReduces = combineReducers({
    todosReducer
});

export default createStore(rootReduces, applyMiddleware(thunk));
