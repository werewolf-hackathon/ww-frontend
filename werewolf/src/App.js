import React from 'react'
import { connect } from 'react-redux'
import { checkServer } from './actions'

class App extends React.Component {
  componentDidMount() {
    this.props.checkServer()
  }
  render(){
    return(
      <>
        
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