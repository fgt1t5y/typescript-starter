export interface UserData {
  id: number;
  username: string;
  password: string;
  introduction: string;
  bio: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserRO {
  user: UserData;
}
