import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CallModuleService } from "./callmodule.service";
import { CreateCallInputDto } from "../callModule/CreateCallInputDto";
import { CreateCallOutputDto } from "../callModule/CreateCallOutputDto";

@swagger.ApiTags("callModules")
@common.Controller("callModules")
export class CallModuleController {
  constructor(protected readonly service: CallModuleService) {}

  @common.Get("/:id/create-call")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCall(
    @common.Body()
    body: CreateCallInputDto
  ): Promise<string> {
        return this.service.CreateCall(body);
      }

  @common.Post("/create-entry")
  @swagger.ApiOkResponse({
    type: CreateCallOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCallEntry(
    @common.Body()
    body: CreateCallInputDto
  ): Promise<CreateCallOutputDto> {
        return this.service.CreateCallEntry(body);
      }
}
