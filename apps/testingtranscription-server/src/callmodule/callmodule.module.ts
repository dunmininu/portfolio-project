import { Module } from "@nestjs/common";
import { CallModuleService } from "./callmodule.service";
import { CallModuleController } from "./callmodule.controller";
import { CallModuleResolver } from "./callmodule.resolver";

@Module({
  controllers: [CallModuleController],
  providers: [CallModuleService, CallModuleResolver],
  exports: [CallModuleService],
})
export class CallModuleModule {}
