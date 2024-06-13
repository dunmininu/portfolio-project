import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TranscriptionModuleService } from "./transcriptionmodule.service";
import { TranscribeCallInputDto } from "../transcriptionModule/TranscribeCallInputDto";
import { TranscribeCallOutputDto } from "../transcriptionModule/TranscribeCallOutputDto";

@swagger.ApiTags("transcriptionModules")
@common.Controller("transcriptionModules")
export class TranscriptionModuleController {
  constructor(protected readonly service: TranscriptionModuleService) {}

  @common.Get("/:id/transcribe-call")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TranscribeCall(
    @common.Body()
    body: TranscribeCallInputDto
  ): Promise<string> {
        return this.service.TranscribeCall(body);
      }

  @common.Post("/transcribe-entry")
  @swagger.ApiOkResponse({
    type: TranscribeCallOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TranscribeCallEntry(
    @common.Body()
    body: TranscribeCallInputDto
  ): Promise<TranscribeCallOutputDto> {
        return this.service.TranscribeCallEntry(body);
      }
}
