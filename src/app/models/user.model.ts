export type User = {
  id: string;
  email: string;

  firstName: string;
  lastName: string;
  photoUrl: string;

  googleID?: string;
  githubID?: string;
};

export type LoginModel = {
  email: string;
  password: string;
};

export type RegisterModel = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
