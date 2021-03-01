import { push } from 'react-router-redux';

export default function (post,ownProps) {
    return (dispatch) => {
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            credentials: 'include',
            // headers: {
            //     "Content-Type": "application/json",
            //     Accept: "application/json"
            // },
            // body: JSON.stringify({
            //     post
            // })
            body: post
        })
        .then(res => res.json())
        .then(post =>dispatch({ type: 'ADD-NEW-POST', post }))
        .then(()=>{ownProps.history.push('/myposts')})

            
    }
}