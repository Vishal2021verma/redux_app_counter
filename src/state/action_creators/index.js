export const addCount = (count) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: count
        })
    }
}

export const subCount = (count) => {
    return (dispatch) => {
        dispatch({
            type:"sub",
            payload: count
        })
    }
}