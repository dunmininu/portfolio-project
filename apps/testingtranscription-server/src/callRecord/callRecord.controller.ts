import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CallRecordService } from "./callRecord.service";
import { CallRecordControllerBase } from "./base/callRecord.controller.base";

@swagger.ApiTags("callRecords")
@common.Controller("callRecords")
export class CallRecordController extends CallRecordControllerBase {
  constructor(protected readonly service: CallRecordService) {
    super(service);
  }
}
