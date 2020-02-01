const initialState = { randomize: false, highlightDay: false }

function setOptions(state = initialState, action) {
    let nextState
    switch(action.type) {
        case 'TOGGLE_RANDOMIZE':
            nextState = {
                ...state,
                randomize: action.value
            }
            return nextState || state
        case 'TOGGLE_HIGHLIGHT_DAY':
            nextState = {
                ...state,
                highlightDay: action.value
            }
            return nextState || state
        default:
            return state
    }
}

export default setOptions