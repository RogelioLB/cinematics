const initialState = []

export function categoriesReducer(state=initialState,action){
    switch(action.type){
        case "LOAD_CATEGORIES":
            return action.payload
        default:
            return state
    }
}