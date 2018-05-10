import * as ip from 'icepick';
import { usersActions } from '../actions';

const initialState = {
  users: [],
};

const usersReducer = (state: any, action: any) => {
  switch (action.type) {
    case usersActions.CREATE_NEW_USER:
      state = ip.setIn(
        state,
        ['users'],
        ip.push(state.users, action.payload.user),
      );
      return state;

    default:
      return initialState;
  }
};

export { usersReducer };
