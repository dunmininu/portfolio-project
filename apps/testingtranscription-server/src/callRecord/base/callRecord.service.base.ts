/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CallRecord as PrismaCallRecord } from "@prisma/client";

export class CallRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CallRecordCountArgs, "select">
  ): Promise<number> {
    return this.prisma.callRecord.count(args);
  }

  async callRecords<T extends Prisma.CallRecordFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CallRecordFindManyArgs>
  ): Promise<PrismaCallRecord[]> {
    return this.prisma.callRecord.findMany<Prisma.CallRecordFindManyArgs>(args);
  }
  async callRecord<T extends Prisma.CallRecordFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CallRecordFindUniqueArgs>
  ): Promise<PrismaCallRecord | null> {
    return this.prisma.callRecord.findUnique(args);
  }
  async createCallRecord<T extends Prisma.CallRecordCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CallRecordCreateArgs>
  ): Promise<PrismaCallRecord> {
    return this.prisma.callRecord.create<T>(args);
  }
  async updateCallRecord<T extends Prisma.CallRecordUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CallRecordUpdateArgs>
  ): Promise<PrismaCallRecord> {
    return this.prisma.callRecord.update<T>(args);
  }
  async deleteCallRecord<T extends Prisma.CallRecordDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CallRecordDeleteArgs>
  ): Promise<PrismaCallRecord> {
    return this.prisma.callRecord.delete(args);
  }
}
