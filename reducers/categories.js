const initialState = []

export function categoriesReducer(state=initialState,action){
    switch(action.type){
        case "LOAD":
            return [action.payload]
        default:
            return state
    }
}