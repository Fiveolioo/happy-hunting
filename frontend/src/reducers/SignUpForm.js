export default function(state=[], action) {
    switch (action.type) {
        case "SIGN UP":
            return [action.data]
        
        default:
            return state
    }
}