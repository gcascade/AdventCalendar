let defaultUrls = [];
for (let i = 0; i < 24; i++) {
    defaultUrls[i] = require('../../assets/icon.png')
}

let defaultNames = [];
for (let i = 0; i < 24; i++) {
    defaultNames[i] = 'super item';
}

const initialState = { 
    randomize: false,
    highlightDay: false,
    title: 'Advent Calendar',
    urls: defaultUrls,
    names: defaultNames,
    defaultUrls: defaultUrls,
}

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
        case 'EDIT_TITLE':
            nextState = {
                ...state,
                title: action.value
            }
            return nextState || state
        case 'UPDATE_URL': {
            if (action.day) {
                let newUrls = state.urls;
                newUrls[action.day - 1] = action.value[action.day - 1];                 
                nextState = {
                    ...state,
                    urls: newUrls
                };
            }
            else {
                nextState = {
                    ...state,
                    urls:action.value
                };
            }
            return nextState || state
        }
        case 'UPDATE_NAME': {
            if (action.day) {
                let newNames = state.names;
                newNames[action.day - 1] = action.value[action.day - 1]
                nextState = {
                    ...state,
                    names: newNames
                };
            }
            else {
                nextState = {
                    ...state,
                    names: action.value
                }
            }
            return nextState || state
        }
        default:
            return state
    }
}

export default setOptions