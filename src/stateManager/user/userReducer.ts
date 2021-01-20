import { RemoveUsernameAction, REMOVE_USERNAME } from './removeUsernameAction';
import { SetUsernameAction, SET_USERNAME } from './setUsernameAction';
import { UserStateFragment } from './UserStateFragment';

export type UserAction = SetUsernameAction | RemoveUsernameAction;

const initialState: UserStateFragment = {
  username: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction,
): UserStateFragment => {
  switch (action.type) {
    case SET_USERNAME: {
      return { ...state, username: action.payload };
    }
    case REMOVE_USERNAME: {
      return { ...state, username: null };
    }
    default:
      return state;
  }
};
