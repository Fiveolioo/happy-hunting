import React, { Component } from 'react'
import SignUp from './components/SignUp';
//import Login from './components/Login';
//import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
//import Post from './components/Post';
//import PostCreate from './components/PostCreate';
//import MyPosts from './components/MyPosts';


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
            
            
          </Switch>
        </div>
      </Router>
        </div>
    );
  }
}

export default App;
