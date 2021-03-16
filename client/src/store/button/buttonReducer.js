const initState = {
    active: null
}

const buttonReducer = (state = initState, action) => {
    switch (action.type) {
        case 'button/OFF':
            return {active: false}
        case 'button/ON':
            return {active: true}
        case 'button/FETCH_STATUS':
            return {active: action.payload}
        default:
            return state
    }
}

export default buttonReducer;