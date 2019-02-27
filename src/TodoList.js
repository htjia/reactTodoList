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
    // 组件被挂载之前执行
    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    render() { // 就是一个生命周期函数
        console.log('parent---render');
        return (
            <Fragment>
                <div style={{margin:10}}>
                    {/*<label htmlFor="insertArea">输入内容</label>*/}
                    {/*<input*/}
                        {/*id='insertArea'*/}
                        {/*className="input"*/}
                        {/*value={ this.state.inputValue }*/}
                        {/*onChange={ this.handleInputChange }*/}
                        {/*ref={(input) => {*/}
                            {/*this.input = input*/}
                        {/*}}*/}
                    {/*/>*/}
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
                    {/*<button onClick={ this.handleBtnClick }>提交</button>*/}
                </div>
                {/*<ul>*/}
                    {/*{ this.getTodoItem() }*/}
                {/*</ul>*/}
            </Fragment>
        )
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    // 组件被挂载后执行 (可发送ajax请求)
    componentDidMount() {
        // axios.get('/api/todolist').then((res)=>{
        //     console.log(res.data);
        //     this.setState(()=>({
        //         list: [...res.data]
        //     }))
        // }).catch(()=>{
        //     alert('error')
        // })
    }

    // 组件更新前执行
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');
    //     return true // 决定组件是否被更新！   false --> 不更新
    // }

    // 组件更新前执行 但是在shouldComponentUpdate之后被执行
    // 如果shouldComponentUpdate返回true执行，返回false则不执行了
    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }
    // 组件更新后执行
    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }

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
        // const value= e.target.value
        // const action = {
        //     type: 'CHANGE_INPUT_VALUE',
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
        // const value= this.input.value
        // this.setState(() => ({
        //     inputValue: value
        // }))
    }
    handleBtnClick() {
        // this.setState((prevState) => ({
        //     list: [...prevState.list,prevState.inputValue],
        //     inputValue: ''
        // }))
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete(index) {
        // immutable
        // seate 不允许我们做任何修改
        // this.setState((prevState) => {
        //     const list = [...prevState.list];
        //     list.splice(index, 1)
        //     return {
        //         list
        //     }
        // })
        const action = getDelectItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList
