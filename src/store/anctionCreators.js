import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type: ADD_ITEM
})
export const getDelectItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})
export const getInitList = () => ({
    type: GET_INIT_LIST,
})


// redux-thunk 使用方法

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('/list.json').then((res) => {
//             const data = res.data
//             const action = initListAction(data)
//             dispatch(action)
//         })
//     }
// }
