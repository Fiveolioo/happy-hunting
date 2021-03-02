export default function(id){
    console.log('are you even hitting')
    return (dispatch)=>{
        fetch(`http://localhost:3001/carmakes/${id}`,{
            credentials: 'include'
        })
            .then(res=>res.json())
            .then(posts=>{
                return  dispatch({type:'GET-POSTS', data:posts})
            })
    }
}