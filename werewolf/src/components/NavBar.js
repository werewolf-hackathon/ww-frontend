import React from 'react'
import { withRouter } from 'react-router-dom'

function NavBar(props) {
    console.log(props.match.path)
    const conditionalBackButton = props.match.path === '/signup' ? 'initial' : 'hidden'
    return(
        <div style={{width: '100vw', height: '10vh', color: 'white', display: 'flex', justifyContent: 'space-between'}}>
            <button onClick={() => {props.history.push('/')}} style={{marginLeft: '5vw', visibility: `${conditionalBackButton}`}}>
                Back
            </button>
            <div style={{width: '25vw', padding: '0 5vw', display: 'flex', justifyContent: 'space-between'}}>
                <button>How To Play</button>
                <button>Roles</button>
                <button>Help</button>
            </div>
        </div>
    )
}

export default withRouter(NavBar)