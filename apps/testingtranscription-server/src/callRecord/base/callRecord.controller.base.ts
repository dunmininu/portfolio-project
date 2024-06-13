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
import { CallRecordService } from "../callRecord.service";
import { CallRecordCreateInput } from "./CallRecordCreateInput";
import { CallRecord } from "./CallRecord";
import { CallRecordFindManyArgs } from "./CallRecordFindManyArgs";
import { CallRecordWhereUniqueInput } from "./CallRecordWhereUniqueInput";
import { CallRecordUpdateInput } from "./CallRecordUpdateInput";

export class CallRecordControllerBase {
  constructor(protected readonly service: CallRecordService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CallRecord })
  async createCallRecord(
    @common.Body() data: CallRecordCreateInput
  ): Promise<CallRecord> {
    return await this.service.createCallRecord({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CallRecord] })
  @ApiNestedQuery(CallRecordFindManyArgs)
  async callRecords(@common.Req() request: Request): Promise<CallRecord[]> {
    const args = plainToClass(CallRecordFindManyArgs, request.query);
    return this.service.callRecords({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CallRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async callRecord(
    @common.Param() params: CallRecordWhereUniqueInput
  ): Promise<CallRecord | null> {
    const result = await this.service.callRecord({
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
  @swagger.ApiOkResponse({ type: CallRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCallRecord(
    @common.Param() params: CallRecordWhereUniqueInput,
    @common.Body() data: CallRecordUpdateInput
  ): Promise<CallRecord | null> {
    try {
      return await this.service.updateCallRecord({
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
  @swagger.ApiOkResponse({ type: CallRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCallRecord(
    @common.Param() params: CallRecordWhereUniqueInput
  ): Promise<CallRecord | null> {
    try {
      return await this.service.deleteCallRecord({
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