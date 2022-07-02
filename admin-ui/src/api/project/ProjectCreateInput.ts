import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  owner?: UserCreateNestedManyWithoutProjectsInput;
  startDate?: Date | null;
};
