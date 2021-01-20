import { UserStateFragment } from './UserStateFragment';

export const userSelector = (state: {
  user: UserStateFragment;
}): UserStateFragment => state.user;
