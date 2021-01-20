export const REMOVE_USERNAME = 'REMOVE_USERNAME';

export interface RemoveUsernameAction {
  type: typeof REMOVE_USERNAME;
}

export const removeUsernameAction = (): RemoveUsernameAction => ({
  type: 'REMOVE_USERNAME',
});
