import React  from 'react'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return (
        <div style={{margin:10}}>
            <Input
                value={props.inputValue}
                placeholder="Basic usage"
                style={{width:'300px',marginRight:10}}
                onChange={props.handleInputChange}
            />
            <Button
                type="primary"
                onClick={ props.handleBtnClick }
            >
                提交
            </Button>
            <List
                style={{marginTop:10,width:300}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={ () => {
                    props.handleItemDelete(index)
                } }>{item}</List.Item>)}
            />
        </div>
    )
}
// class TodoListUI extends Component {
//     render() {
//
//     }
// }
export default TodoListUI
