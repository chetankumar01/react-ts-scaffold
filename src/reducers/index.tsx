import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';

const appReducer = combineReducers({
  users: usersReducer,
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

export { rootReducer };
