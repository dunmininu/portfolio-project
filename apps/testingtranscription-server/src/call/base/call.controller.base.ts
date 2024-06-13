/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CallService } from "../call.service";
import { CallCreateInput } from "./CallCreateInput";
import { Call } from "./Call";
import { CallFindManyArgs } from "./CallFindManyArgs";
import { CallWhereUniqueInput } from "./CallWhereUniqueInput";
import { CallUpdateInput } from "./CallUpdateInput";

export class CallControllerBase {
  constructor(protected readonly service: CallService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Call })
  async createCall(@common.Body() data: CallCreateInput): Promise<Call> {
    return await this.service.createCall({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Call] })
  @ApiNestedQuery(CallFindManyArgs)
  async calls(@common.Req() request: Request): Promise<Call[]> {
    const args = plainToClass(CallFindManyArgs, request.query);
    return this.service.calls({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Call })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async call(
    @common.Param() params: CallWhereUniqueInput
  ): Promise<Call | null> {
    const result = await this.service.call({
      where: params,
      select: {
        createdAt: true,
        id: true,
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Call })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCall(
    @common.Param() params: CallWhereUniqueInput,
    @common.Body() data: CallUpdateInput
  ): Promise<Call | null> {
    try {
      return await this.service.updateCall({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Call })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCall(
    @common.Param() params: CallWhereUniqueInput
  ): Promise<Call | null> {
    try {
      return await this.service.deleteCall({
        where: params,
        select: {
          createdAt: true,
          id: true,
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
}