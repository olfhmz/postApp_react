import React from 'react';
import ReactDOM from 'react-dom/client';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from "./redux/rootReducer";
import {forbiddenWordsMiddleware} from "./redux/middleware";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        forbiddenWordsMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();
