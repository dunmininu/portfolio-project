import * as graphql from "@nestjs/graphql";
import { CallRecordResolverBase } from "./base/callRecord.resolver.base";
import { CallRecord } from "./base/CallRecord";
import { CallRecordService } from "./callRecord.service";

@graphql.Resolver(() => CallRecord)
export class CallRecordResolver extends CallRecordResolverBase {
  constructor(protected readonly service: CallRecordService) {
    super(service);
  }
}
