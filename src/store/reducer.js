const defaultState = {
    inputValue: 'hello',
    list: [
        '1',
        '2',
        '3'
    ]
}
// reducer 可以接收state, state
export default (state = defaultState, action) => {

    if (action.type === 'changeInputValue') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState;
    }
    return state;
}
