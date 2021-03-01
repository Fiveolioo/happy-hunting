
export default function(post, id){
    console.log('POST IN UPDATE?', post)
    console.log('ID', id)
    return dispatch => {
        fetch(`http://localhost:3001/posts/${id}`, {
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