import { Injectable } from "@nestjs/common";
import { CreateCallInputDto } from "../callModule/CreateCallInputDto";
import { CreateCallOutputDto } from "../callModule/CreateCallOutputDto";

@Injectable()
export class CallModuleService {
  constructor() {}
  async CreateCall(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateCallEntry(args: CreateCallInputDto): Promise<CreateCallOutputDto> {
    throw new Error("Not implemented");
  }
}
