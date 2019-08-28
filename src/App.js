import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IP from './IP.js';
import Bids from './Bids.js';
import LoginForm from './auth.js';
import GameLobby from './GameLobby.js';

const roomNumber = 'abc123';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path={roomNumber} component={GameLobby} />
    </Switch>
  );
}
