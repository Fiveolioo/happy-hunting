import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CarMakes from './CarMakes';

function Navbar({ currentUser }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link className="navbar-brand" to="/">HAPPY HUNTING</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home~</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myposts">My Posts~</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/createPost">Create a Post~</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <CarMakes />
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {!currentUser[0].logged_in ? <Link className="nav-link" to="/login">Login</Link> : null}
                        </li>
                        <li className="nav-item">
                            {!currentUser[0].logged_in ? <Link className="nav-link" to="/signup">Signup</Link> : null}
                        </li>
                        <li className="nav-item">
                            {currentUser[0].logged_in ? <Link className="nav-link" to="/logout">Logout</Link> : null}
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const mstp = state => {
    return {
        currentUser: state.currentUser
    }
}
export default connect(mstp)(Navbar)