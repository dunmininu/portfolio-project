import { Injectable } from "@nestjs/common";
import { TranscribeCallInputDto } from "../transcriptionModule/TranscribeCallInputDto";
import { TranscribeCallOutputDto } from "../transcriptionModule/TranscribeCallOutputDto";

@Injectable()
export class TranscriptionModuleService {
  constructor() {}
  async TranscribeCall(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async TranscribeCallEntry(args: TranscribeCallInputDto): Promise<TranscribeCallOutputDto> {
    throw new Error("Not implemented");
  }
}
