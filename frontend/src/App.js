import React, { Component } from 'react'
import SignUp from './components/SignUp';
import Login from './components/Login';
import { connect } from 'react-redux';
import signup from './actions/SignUp'
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Posts from './actions/Posts';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import MyPosts from './components/MyPosts';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidMount() {
    this.props.Posts()
  }


  render() {
    return (
        <div className="main-page">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={props => <Home{...props}/>} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/posts/:postId" render={props => <Post{...props} posts={this.props.posts}/>} />
            <Route exact path="/createPost" component={CreatePost}/>    
            <Route exact path="/myposts" component={MyPosts}/>    
            <Route exact path="/logout" component={Logout}/>    
            
            <Logout />
          </Switch>
        </div>
      </Router>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    posts:state.posts
  }
}


export default connect(mapStateToProps, { signup, Posts})(App);