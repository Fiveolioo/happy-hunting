import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Posts from './Posts';
import Navbar from './Navbar';
import postsAction from '../actions/Posts';

class Home extends Component {

    componentDidMount() {
        this.props.postsAction()
    }

    render() {
        return (
            <div>
                {!this.props.currentUser.logged_in ? this.props.history.push('/login') : null}
                <Navbar />
                {this.props.posts.length > 0 ? <Posts posts={this.props.posts} /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps,{postsAction})(Home)