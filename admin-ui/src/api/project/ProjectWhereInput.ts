import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: UserListRelationFilter;
  startDate?: DateTimeNullableFilter;
};
