export type Group = {
  id: string;
  name: string;
  description: string;
};

export type GroupMember = {
  id: string;
  userID: string;
  groupID: string;
  role: string;
};
