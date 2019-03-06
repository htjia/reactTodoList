import React from 'react';
import ReactDOM from 'react-dom';
import TodoListReactRedux from './TodoListReactRedux';
import { Provider } from 'react-redux'
import store from './store'

const App = (
    <Provider store = {store}>
        <TodoListReactRedux />
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));
