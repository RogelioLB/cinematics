import { createStore, applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { categoriesReducer } from '../reducers/categories';
import { paginationReducers } from '../reducers/pagination';
import { postsReducer } from '../reducers/post';
const initialState = {}
const store = createStore(
  combineReducers({posts:postsReducer,categories:categoriesReducer,pagination:paginationReducers}),
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);


export default store;
