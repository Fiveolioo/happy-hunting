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
                <Navbar />
                {this.props.posts.length > 0 ? <Posts posts={this.props.posts} /> : null}
            </div>
        )
    }
}

const mstp = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mstp,{postsAction})(Home)