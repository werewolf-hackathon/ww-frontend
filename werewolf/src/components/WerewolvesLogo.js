import React from 'react';

function WerewolvesLogo() {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{width: '10vw', height: '10vw', border: '1px solid grey'}} />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1 style={{margin: '0', padding: '0', fontSize: '2.5em'}}>
          WEREWOLVES
        </h1>
        <h3 style={{margin: '0', padding: '0', fontSize: '.9em'}}>
          A DEVIOUS PARTY GAME. <strong>GONE WEB</strong>
        </h3>
      </div>
    </div>
  );
}

export default WerewolvesLogo;
