export const setOff = (callback) => {
    callback(false)
    return {
        type: 'button/OFF'
    }
}

export const setOn = (callback) => {
    callback(true)
    return {
        type: 'button/ON'
    }
}

export const fetchStatus = () => {
    return async dispatch => {
        const res = await fetch('/api/v1/button/status', {method: 'GET'})
        const data = await res.json()
        dispatch({type: 'button/FETCH_STATUS', payload: data.status})
    }
}