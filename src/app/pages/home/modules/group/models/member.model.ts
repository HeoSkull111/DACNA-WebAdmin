import { User } from '@models/user.model';

export type GroupMember = {
  user: User;
  role: string;
};
