import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  Description: string | null;
  dueDate: Date | null;
  id: string;
  name: string | null;
  owner?: Array<User>;
  startDate: Date | null;
  updatedAt: Date;
};
