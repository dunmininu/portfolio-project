import * as graphql from "@nestjs/graphql";
import { TranscribeCallInputDto } from "../transcriptionModule/TranscribeCallInputDto";
import { TranscribeCallOutputDto } from "../transcriptionModule/TranscribeCallOutputDto";
import { TranscriptionModuleService } from "./transcriptionmodule.service";

export class TranscriptionModuleResolver {
  constructor(protected readonly service: TranscriptionModuleService) {}

  @graphql.Query(() => String)
  async TranscribeCall(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.TranscribeCall(args);
  }

  @graphql.Mutation(() => TranscribeCallOutputDto)
  async TranscribeCallEntry(
    @graphql.Args()
    args: TranscribeCallInputDto
  ): Promise<TranscribeCallOutputDto> {
    return this.service.TranscribeCallEntry(args);
  }
}
