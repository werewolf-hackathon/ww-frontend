import React from 'react';
import {withRouter, Link} from 'react-router-dom';

function NavBar(props) {
  const conditionalBackButton =
    props.match.path === '/signup' ? 'initial' : 'hidden';
  return (
    <div
      style={{
        width: '100vw',
        height: '10vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <button
        onClick={() => {
          props.history.push('/');
        }}
        style={{marginLeft: '5vw', visibility: `${conditionalBackButton}`}}
      >
        Back
      </button>
      <div
        style={{
          width: '25vw',
          padding: '0 5vw',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Link to="/howtoplay">How To Play</Link>
        <Link to="/roles">Roles</Link>
        <Link to="/help">Help</Link>
      </div>
    </div>
  );
}

export default withRouter(NavBar);
