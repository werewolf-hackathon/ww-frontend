import React from 'react';
import {NavBar, WerewolvesLogo, LoginForm} from '../components';

function LoginPage() {
  return (
    <div style={{background: '', width: '100vw', height: '100vh'}}>
      <NavBar />
      <WerewolvesLogo />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
