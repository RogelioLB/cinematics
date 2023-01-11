export function paginationReducers(state={},action){
    switch(action.type){
        case "CHANGE_NAVIGATION":
            return action.payload
        default:
            return state
    }
}