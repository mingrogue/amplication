import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  Description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  owner?: UserUpdateManyWithoutProjectsInput;
  startDate?: Date | null;
};
