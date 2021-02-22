export default function(state=[], action) {
    switch (action.type) {
        case "MY-POSTS":
            return [action.data]
        case "ADD-NEW-POST":
            return [...state, action.post]
        case 'EDIT-POST':
            const newState = state.filter(i => i.id !== action.post.id)
            return [...newState, action.post]
        case "DELETE-POST":
            return [...state.filter(i => i.id !== action.data.id)]
        
        default:
            return state
    }
}