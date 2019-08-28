import React from 'react';
import { Host } from './host';
import { LoginStyles } from './themes.js';

console.log({ Host });

export default function GameLobby() {
  return (
    <LoginStyles>
      <div className="Splash">
        <h1>This is a game lobby.</h1>
        <h2>Party Name: </h2>
      </div>
    </LoginStyles>
  );
}
