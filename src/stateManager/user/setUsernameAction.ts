export const SET_USERNAME = 'SET_USERNAME';

export interface SetUsernameAction {
  type: typeof SET_USERNAME;
  payload: string;
}

export const setUsernameAction = (payload: string): SetUsernameAction => ({
  type: 'SET_USERNAME',
  payload,
});
