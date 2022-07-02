import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  Description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  owner?: UserCreateNestedManyWithoutProjectsInput;
  startDate?: Date | null;
};
