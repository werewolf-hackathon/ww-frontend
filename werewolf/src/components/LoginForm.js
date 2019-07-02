import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import { withRouter, Link } from 'react-router-dom'

class LoginForm extends React.Component {
    state={
        credentials: {
            username: '',
            password: ''
        }
    }
    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    login = e => {
        e.preventDefault()
        this.props.login(this.state.credentials)
    }
    render(){
        const loggingConditional = this.props.loggingIn ? "Signing In" : this.props.loggedIn ? "Welcome" : this.props.error ? "Error signing in. Please try again" : "Sign In"
        return(
            <>
                {this.props.loggedIn && this.props.history.push('/game')}
                <form onSubmit={this.login}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
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
                        {/* <p>Forget Password?</p> */}
                        <button>
                            {loggingConditional}
                        </button>
                    </div>
                </form>
                <p>Don't have an account? Sign Up <Link to="/signup">here</Link></p>
            </>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    loggedIn: state.loggedIn,
    error: state.error,
    message: state.message
})

export default connect(
    mapStateToProps,
    { login }
)(withRouter(LoginForm))