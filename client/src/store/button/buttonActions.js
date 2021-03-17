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

export const setStatus = (status) =>{
    console.log(1231)
    return {
        type: 'button/SET_STATUS',
        payload: status
    }
}