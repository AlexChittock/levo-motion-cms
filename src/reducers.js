import { combineReducers } from 'redux'

import { NAVTOGGLE, RESIZE } from './actions'

const nav = (state, action) => {
  switch (action.type) {
    case NAVTOGGLE:
      return Object.assign({}, state, {
        isNavOpen: !state.isNavOpen
      })
  }
  return state || { isNavOpen: false }
}

const viewport = (state, action) => {
  if (RESIZE == action.type) {
    return [
      window.innerHeight,
      window.innerWidth
    ]
  }
  return state || [
    window.innerHeight,
    window.innerWidth
  ]
}

export default combineReducers({ nav, viewport })