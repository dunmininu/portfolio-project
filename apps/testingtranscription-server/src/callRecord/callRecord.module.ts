import { Module } from "@nestjs/common";
import { CallRecordModuleBase } from "./base/callRecord.module.base";
import { CallRecordService } from "./callRecord.service";
import { CallRecordController } from "./callRecord.controller";
import { CallRecordResolver } from "./callRecord.resolver";

@Module({
  imports: [CallRecordModuleBase],
  controllers: [CallRecordController],
  providers: [CallRecordService, CallRecordResolver],
  exports: [CallRecordService],
})
export class CallRecordModule {}
