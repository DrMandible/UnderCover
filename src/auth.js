import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginStyles } from './themes.js';
import { Host } from './host.js';
import loading from './images/loading.mp4';

console.log(Host[0]);

export const AuthContext = React.createContext({ value: false });

export function handleJoin({ joinPartyName, setAuth, auth }) {
  for (let i = 0; i < Host.length; i++) {
    console.log(Host[i].id);
    joinPartyName === Host[i].id && setAuth(true);
  }
  if (auth) {
    return (
      <div>
        <AuthContext.Provider value={{ auth, setAuth }}>
          {props.children}
        </AuthContext.Provider>
        <Redirect to="GameLobby" />
      </div>
    );
  } else {
    alert(joinPartyName + ' was not found!');
  }
}
export default function LoginForm(props) {
  const [joinPartyName, setJoinPartyName] = useState('');
  const [newPartyName, setNewPartyName] = useState('');
  const [auth, setAuth] = useState(false);

  console.log(auth);

  return (
    <LoginStyles>
      <div className="Splash">
        <div className="Login">
          <br />
          <form>
            <label>
              <input
                type="text"
                value={joinPartyName}
                placeholder="Existing Party Name"
                onInput={e => setJoinPartyName(e.target.value)}
              />
            </label>
            <input
              value="Join Party"
              className="Submit-Button"
              onClick={() => handleJoin(joinPartyName)}
            />
            <h1 className="Title-text">UNDER_COVER</h1>
            <input value="New Party" className="Submit-Button" />
            <label>
              <input
                style={{ backgroundColor: 'rgba(0,0,0,0.0)' }}
                type="text"
                value={newPartyName}
                placeholder="New Party Name"
                onChange={d => setNewPartyName(d.target.value)}
              />
            </label>
          </form>
        </div>
        <video className="bgvid" autoPlay muted loop>
          <source src={loading} type="video/mp4" />
        </video>
      </div>
    </LoginStyles>
  );
}
