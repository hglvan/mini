
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Provider} from 'react-redux';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import routes from './router';

import createStore from './redux/configureStore';

const store = createStore(window.__INITIAL_STATE__, browserHistory);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={hashHistory} routes={routes}/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
)