import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  name?: string | null;
  owner?: UserUpdateManyWithoutProjectsInput;
  startDate?: Date | null;
};
