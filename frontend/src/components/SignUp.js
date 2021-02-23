import React from 'react'
import { connect } from 'react-redux'
import signup from '../actions/SignUp'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaKey, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName:  '',
            username: '',
            phone_number: '',
            email: '',
            password: '',
        }
    }

    handleChange = (t) => {
        this.setState({
            [t.target.name]: t.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/users', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ user: this.state })
        }).then(res => res.json())
          .then(user => {
            this.props.signup(user)
          })
          .then(() => {
            if (this.props.currentUser.logged_in) {
              this.props.history.push('/')
            }
            else {
              this.setState({
                errors: this.props.currentUser.errors
              })
              document.getElementById("errors").className += " alert alert-danger";
            }
          })
      }
    
      componentDidMount() {
        return this.props.currentUser.logged_in ? (this.props.history.push('/')) : null
      }
    
      render() {
        return (
          <div>
            <Navbar />
          </div>
        )
      }
    }
    
    const mstp = (state) => {
      return {
        currentUser: state.currentUser[0]
      }
    }
    
    export default connect(mstp, { signup })(SignUp)

