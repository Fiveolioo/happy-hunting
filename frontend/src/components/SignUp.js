import React from 'react'

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
}

export default SignUp