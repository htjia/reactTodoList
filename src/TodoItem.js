import React, {Component} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    // 防止子组件重复渲染
    shouldComponentUpdate(nextPorops, nextState) {
        if (nextPorops.content !== this.props.content) {
            return true;
        } else {
            return false
        }
    }
    render() {
        console.log('child---render');
        const { content } = this.props
        return (
            <div onClick={ this.handleClick }>{ content } </div>
        )
    }
    // 当一个组件从父组建接收了参数
    // 只要父组建的render函数被重新执行了，子组件的componentWillReceiveProps就会被执行
    handleClick() {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
}
TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,

}
export default TodoItem
