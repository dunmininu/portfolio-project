import * as graphql from "@nestjs/graphql";
import { CreateCallInputDto } from "../callModule/CreateCallInputDto";
import { CreateCallOutputDto } from "../callModule/CreateCallOutputDto";
import { CallModuleService } from "./callmodule.service";

export class CallModuleResolver {
  constructor(protected readonly service: CallModuleService) {}

  @graphql.Query(() => String)
  async CreateCall(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.CreateCall(args);
  }

  @graphql.Mutation(() => CreateCallOutputDto)
  async CreateCallEntry(
    @graphql.Args()
    args: CreateCallInputDto
  ): Promise<CreateCallOutputDto> {
    return this.service.CreateCallEntry(args);
  }
}
