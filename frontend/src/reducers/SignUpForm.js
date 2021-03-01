export default function(state={ logged_in: false }, action) {
    switch (action.type) {
        case "SIGN UP":
            return { ...action.data }
        
        default:
            return state
    }
}