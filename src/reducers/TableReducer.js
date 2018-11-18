const initialState = {
    liveData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DATA':{
            return {
                ...state,
                liveData: action.data
            }
        }

        default:
            return state
    }
}