import React, { Component } from 'react'
import { connect } from 'react-redux'
import myPosts from '../actions/MyPosts';
import Post from './Post';
import Navbar from './Navbar';

class MyPosts extends Component {
    componentDidMount(){
        this.props.myPosts()
    }
    render() {
        return (
            <div >
                {!this.props.currentUser.logged_in?this.props.history.push('/login'):null}
                <Navbar/>
                <h1>My Posts</h1>
                <div className="flex-container">
                    {this.props.userPosts.map(post => <Post post={post} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        userPosts: state.myPosts,
        currentUser:state.currentUser
    }
)

export default connect(mapStateToProps, {myPosts})(MyPosts)