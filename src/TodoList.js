import React, { Component } from 'react';
import TodoItem from './TodoItem';
import 'antd/dist/antd.css';
import store from './store'
import {
    getInputChangeAction,
    getAddItemAction,
    getDelectItemAction,
    getInitList
} from './store/anctionCreators'
import TodoListUI from './TodoListUI'
import './style.css';
//

class TodoList extends Component {
    constructor(props) { // 就是一个生命周期函数（组件创建的时候执行）es6独有的，非react生命周期函数
        super(props);
        // 当组件的state或者props发生改变时，render函数就会重新执行
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() { // 就是一个生命周期函数
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
    componentDidMount() {
        const action = getInitList()
        store.dispatch(action)

        // redux-thunk 使用方法
        // const action = getTodoList()
        // store.dispatch(action)


        // axios.get('/list.json').then((res) => {
        //     const data = res.data
        //     const action = initListAction(data)
        //     store.dispatch(action)
        // })
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={ index }
                    content = { item }
                    index={ index }
                    deleteItem={ this.handleItemDelete }
                />
            )
        })
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete(index) {
        const action = getDelectItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList
