const initialState = []

export function postsReducer(state = initialState,action){
    switch(action.type){
        case "LOAD_POSTS":
            return action.payload
        default:
            return state
    }
}