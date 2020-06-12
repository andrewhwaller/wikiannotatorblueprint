export const changeMode = value => {  
    return {
        type: "CHANGE_MODE",
        darkMode: !value
    }
};