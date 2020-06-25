export const setDelta = delta => {
    if (delta) {
        return {
            type: "SET_DELTA",
            delta: delta
        }
    } else {
        return
    }
}

export const clearDelta = () => {
    return {
        type: "CLEAR_DELTA",
        delta: {}
    }
}