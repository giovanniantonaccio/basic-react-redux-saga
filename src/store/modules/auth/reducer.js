import produce from 'immer';

const INITIAL_STATE = {
  user: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOGIN_REQUEST':
        draft.loading = true;
        break;
      case '@auth/LOGIN_SUCCESS':
        draft.signed = true;
        draft.loading = false;
        draft.user = action.payload.user;
        break;
      case '@auth/LOGIN_FAILURE':
        draft.loading = false;
        break;
      case '@auth/LOGOUT':
        draft.signed = false;
        draft.user = null;
        break;
      default:
    }
  });
}
