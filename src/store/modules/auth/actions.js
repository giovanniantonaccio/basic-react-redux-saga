export function loginRequest(username) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { username },
  };
}

export function loginSuccess(user) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { user },
  };
}

export function loginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
  };
}

export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
}
