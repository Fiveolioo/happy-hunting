export default function (post){
    return dispatch => {
        fetch(`http://localhost:3001/posts/${post.id}`, {
            method: 'DELETE',
            credentials: 'include'
            
        })
        .then(res=>res.json())
        .then(json=>{ 
            dispatch({type:'DELETE-POST',data:json })
        })
    }
}