const initialState = { randomize: false }

function setOptions(state = initialState, action) {
    let nextState
    switch(action.type) {
        case 'TOGGLE_RANDOMIZE':
            nextState = {
                ...state,
                randomize: action.value
            }
            return nextState || state
        default:
            return state
    }
}

export default setOptions