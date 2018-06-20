import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './src/createStore'

import { resize } from './src/actions'

import tabler from './src/components/Table'

exports.replaceRouterComponent = ({ history }) => {
    const store = createStore()

    window.onresize = () => store.dispatch(resize())
    window.onload = () => tabler()

    const ConnectedRouterWrapper = ({ children }) => (
        <Provider store={store}>
            <Router history={history}>{children}</Router>
        </Provider>
    )

    return ConnectedRouterWrapper
}