import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import session from './session'
import albumsReducer from './album'
import songsReducer from "./song";
import lastPlayReducer from "./lastPlay"
import playsReducer from "./play"
import followReducer from "./following";
import playlistReducer from "./playlist";
import playerReducer from "./player";
import playlistAlbumsReducer from "./playlistAlbum";



const rootReducer = combineReducers({
    session,
    albums: albumsReducer,
    songs: songsReducer,
    lastPlays: lastPlayReducer,
    plays: playsReducer,
    follows: followReducer,
    playlists: playlistReducer,
    player: playerReducer,
    playlistAlbums: playlistAlbumsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
