import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
// import axios from 'axios'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
import { getInputChangeAction, getAddItemAction, getDelectItemAction } from './store/anctionCreators'
import './style.css';

class TodoList extends Component {
    constructor(props) { // 就是一个生命周期函数（组件创建的时候执行）es6独有的，非react生命周期函数
        super(props);
        // 当组件的state或者props发生改变时，render函数就会重新执行
        console.log(store.getState())
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() { // 就是一个生命周期函数
        return (
            <Fragment>
                <div style={{margin:10}}>
                    <Input
                        value={this.state.inputValue}
                        placeholder="Basic usage"
                        style={{width:'300px',marginRight:10}}
                        onChange={this.handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={ this.handleBtnClick }
                    >
                        提交
                    </Button>
                    <List
                        style={{marginTop:10,width:300}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={ this.handleItemDelete.bind(this, index) }>{item}</List.Item>)}
                    />
                </div>
            </Fragment>
        )
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
