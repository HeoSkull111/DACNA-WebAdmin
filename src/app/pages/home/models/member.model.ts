import { FullUser } from '@models/user.model';

export type GroupMember = {
  id: string;
  user: FullUser;
  status: 'WORKING' | 'LEFT';
  role: string;
};

export type GroupMembersPagination = {
  members: GroupMember[];
  currentPage: number;
  perPage: number;
  total: number;
};
