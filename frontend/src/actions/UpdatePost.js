
export default function(post){
    return dispatch => {
        fetch(`http://localhost:3001/posts/${post.id}`, {
            method: 'PATCH',
            credentials: 'include',
            body:post
        })
        .then(res=>res.json())
        .then(post=>{ 
            dispatch({ type: 'EDIT-POST', post })
        })
    }
}