export type GroupMember = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  role: string;
};

export type GroupMembersPagination = {
  members: GroupMember[];
  currentPage: number;
  perPage: number;
  total: number;
};
