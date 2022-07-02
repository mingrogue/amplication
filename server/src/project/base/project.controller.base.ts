/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProjectService } from "../project.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProjectCreateInput } from "./ProjectCreateInput";
import { ProjectWhereInput } from "./ProjectWhereInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";
import { ProjectFindManyArgs } from "./ProjectFindManyArgs";
import { ProjectUpdateInput } from "./ProjectUpdateInput";
import { Project } from "./Project";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProjectControllerBase {
  constructor(
    protected readonly service: ProjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Project })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ProjectCreateInput): Promise<Project> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        Description: true,
        dueDate: true,
        id: true,
        name: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Project] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ProjectFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Project[]> {
    const args = plainToClass(ProjectFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        Description: true,
        dueDate: true,
        id: true,
        name: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        Description: true,
        dueDate: true,
        id: true,
        name: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() data: ProjectUpdateInput
  ): Promise<Project | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          Description: true,
          dueDate: true,
          id: true,
          name: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          Description: true,
          dueDate: true,
          id: true,
          name: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/owner")
  @ApiNestedQuery(UserFindManyArgs)
  async findManyOwner(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findOwner(params.id, {
      ...query,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/owner")
  async connectOwner(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      owner: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/owner")
  async updateOwner(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      owner: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/owner")
  async disconnectOwner(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      owner: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
