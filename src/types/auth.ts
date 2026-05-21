export type Role = 'user' | 'admin' | '';

export type User = {
  isAuthenticated: boolean;
  role: Role;
};
