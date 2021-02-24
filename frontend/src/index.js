import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SignUpForm from './reducers/SignUpForm';
import thunk from 'redux-thunk';
import Posts from './reducers/Posts';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';
import userPosts from './reducers/NewPost.js';
import myPosts from './reducers/MyPosts';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['currentUser', 'posts', 'userPosts', 'myPosts']
}
const rootReducer = combineReducers({
    currentUser: SignUpForm,
    posts: Posts,
    userPosts,
    myPosts
});

const store = createStore(
    persistReducer(persistConfig, rootReducer), composeEnhancer(applyMiddleware(thunk))
);

const persistor = persistStore(store)


ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();