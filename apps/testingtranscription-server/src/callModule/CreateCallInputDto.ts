import { ArgsType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";

@ArgsType()
class CreateCallInputDto {
    @Field(() => Date)
    @Type(() => Date)
    callStartTime!: Date;

    @Field(() => Date)
    @Type(() => Date)
    callEndTime!: Date;
}

export { CreateCallInputDto as CreateCallInputDto };