export default function(state=[], action) {
    switch (action.type) {
        case "GET-POSTS":
            return action.data
        case "RESET-POSTS":
            return []
        default:
            return state
    }
}