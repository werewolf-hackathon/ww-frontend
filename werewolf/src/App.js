import React from 'react'
import { connect } from 'react-redux'
import { checkServer } from './actions'
import { Route } from 'react-router-dom'
import { LoginPage, SignUpPage, GamePage, ErrorPage } from './pages'
import PrivateRoute from './PrivateRoute'

class App extends React.Component {
  componentDidMount() {
    this.props.checkServer()
  }
  render(){
    return(
      <>
        {this.props.error && <ErrorPage error={this.props.error} />}
        {!this.props.error && 
        <>
  
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <PrivateRoute path="/game" component={GamePage} />
          
        </>
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error
})

export default connect(
  mapStateToProps,
  { checkServer }
)(App)