import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import reducer from './reducer'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
    // applyMiddleware(thunk)
);
sagaMiddleware.run(mySaga)

export default  store
