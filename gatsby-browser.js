import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './src/createStore'

import { resize } from './src/actions'

exports.replaceRouterComponent = ({ history }) => {
    const store = createStore()

    window.onresize = () => store.dispatch(resize())

    const ConnectedRouterWrapper = ({ children }) => (
        <Provider store={store}>
            <Router history={history}>{children}</Router>
        </Provider>
    )

    return ConnectedRouterWrapper
}