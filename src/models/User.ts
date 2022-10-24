export interface SignupUser {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  contact: string;
  password: string;
  password_confirmation: string;
}

export interface SigninUser {
  email: string;
  password: string;
  role: string;
}

export interface UpdateUser {
  fist_name: string;
  last_name: string;
  contact: string;
  address: string;
  imageUrl: never;
}

export interface User {
  email: string;
  id: number;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
  profile: {
    last_name: string;
    contact: string;
    address: string;
    fist_name: string;
    imageUrl: string;
  };
}
