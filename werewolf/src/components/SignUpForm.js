import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions'
import { withRouter, Link } from 'react-router-dom'

class SignUpForm extends React.Component {
    state={
        credentials: {
            email: '',
            username: '',
            password: '',
            checkPassword: ''
        },
        error: ''
    }
    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    signUp = e => {
        e.preventDefault()
        if(this.state.credentials.password === this.state.credentials.checkPassword) {
            this.props.signUp(this.state.verifiedCredentials)
        } else {
            this.setState({
                error: "Passwords do not match"
            }) 
        }
    }
    render(){
        const signingUpConditional = this.props.signingUp ? "Signing Up..." : this.props.signedUp ? "Successful Signing Up" : this.props.error ? "Error signing up. Please try again" : "Sign Up"
        return(
            <>
                {this.props.signedUp && this.props.history.push('/')}
                <form onSubmit={this.signUp}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        Email
                        <input
                        type="text"
                        name="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChanges}
                         />
                        Username
                        <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                         />
                         Password
                        <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                         />
                        Confirm Password
                        <input
                        type="password"
                        name="password"
                        value={this.state.credentials.checkPassword}
                        onChange={this.handleChanges}
                         />
                        {this.state.error && <p>{this.state.error}</p>}
                        <button>
                            {signingUpConditional}
                        </button>
                    </div>
                </form>
                <p>Already have an account? Login <Link to="/">here</Link></p>
            </>
        )
    }
}

const mapStateToProps = state => ({
    signingUpIn: state.signingUpIn,
    signedUpIn: state.signedUp,
    error: state.error,
    message: state.message
})

export default connect(
    mapStateToProps,
    { signUp }
)(withRouter(SignUpForm))