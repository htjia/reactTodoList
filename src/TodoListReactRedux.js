import React, { Component } from 'react'
import { connect }  from 'react-redux'
class TodoListReactRedux extends Component {
    render() {
        return (
            <div>
                <input value={ this.props.inputValue } onChange={this.props.handleInputChange}/>
                <button>提交</button>
                <ul>
                    <li>Dell</li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            console.log(e.target.value);
            const action = {
                type: 'changeInputValue',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoListReactRedux)
