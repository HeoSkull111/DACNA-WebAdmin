export type Group = {
  id: string;
  name: string;
  description: string;
};

export type GroupsPagination = {
  groups: Group[];
  currentPage: number;
  perPage: number;
  total: number;
};
