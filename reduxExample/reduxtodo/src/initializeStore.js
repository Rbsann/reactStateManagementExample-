import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import createReducer from './rootReducer';

// Responsible for creating the redux store–and any associated work like middleware.
//
// The ideas here and in createReducer are directly from Dan:
// https://stackoverflow.com/a/33044701
// The difference is in how I inject reducers using withReducer()
const initializeStore = () => {
  const initialState = {}
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(createReducer(), initialState, applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  return store
};

export default initializeStore
