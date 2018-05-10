import { createAction } from 'redux-actions';

const CREATE_NEW_USER = 'USERS/CREATE_NEW_USER';
const createNewUser = createAction(CREATE_NEW_USER);

const usersActions = {
  CREATE_NEW_USER,
  createNewUser,
};

export { usersActions };
