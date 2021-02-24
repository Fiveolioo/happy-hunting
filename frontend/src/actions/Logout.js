export default function(){
    return dispatch=>{
        fetch('http://localhost:3001/logout', {
            credentials: "include",
            method: "DELETE"
          }).then(()=>{
            dispatch({ type: 'SIGN UP', data:{logged_in: false} })
          })
    }
}