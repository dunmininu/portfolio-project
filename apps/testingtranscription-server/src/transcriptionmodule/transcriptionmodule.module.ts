import { Module } from "@nestjs/common";
import { TranscriptionModuleService } from "./transcriptionmodule.service";
import { TranscriptionModuleController } from "./transcriptionmodule.controller";
import { TranscriptionModuleResolver } from "./transcriptionmodule.resolver";

@Module({
  controllers: [TranscriptionModuleController],
  providers: [TranscriptionModuleService, TranscriptionModuleResolver],
  exports: [TranscriptionModuleService],
})
export class TranscriptionModuleModule {}
