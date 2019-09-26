import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, UserData } from './styles';

import { loginRequest, logout } from '../../store/modules/auth/actions';
import { increment, decrement } from '../../store/modules/count/actions';

export default function Main() {
  const count = useSelector(state => state.count.counter);
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);
  const signed = useSelector(state => state.auth.signed);

  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  function handleLogin() {
    setUsername('');
    dispatch(loginRequest(username));
  }

  return (
    <Container>
      <h1>Total count: {count}</h1>

      <div>
        <button onClick={() => dispatch(decrement(2))}>-2</button>
        <button onClick={() => dispatch(increment(2))}>+2</button>
      </div>

      {signed ? (
        <button onClick={() => dispatch(logout())}>LOGOUT</button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Github username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button onClick={() => handleLogin()}>LOGIN</button>
        </div>
      )}

      {loading ? <h3>Waiting API response...</h3> : ''}

      {user ? (
        <UserData>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </UserData>
      ) : (
        ''
      )}
    </Container>
  );
}
