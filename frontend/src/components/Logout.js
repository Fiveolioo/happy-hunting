import React, { Component } from 'react'
import { connect } from "react-redux";
import SignUp from '../actions/SignUp';
import logout from "../actions/Logout";

class Logout extends Component {


    render() {
        return (
            <div>
                {this.props.logout()}
                {this.props.history.push('/')}
            </div>
        )
    }
}

export default connect(null,{SignUp,logout})(Logout)