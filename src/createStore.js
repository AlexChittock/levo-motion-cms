import { createStore } from 'redux'

import reducer from './reducers'

const initialState = {
  navReducer: {
    isNavOpen: false
  }
}

export default () => createStore(
  reducer, 
  initialState, 
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || undefined
)