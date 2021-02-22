export default function(state=[], action) {
    switch (action.type) {
        case "GET-POSTS":
            return [action.data]
        
        default:
            return state
    }
}