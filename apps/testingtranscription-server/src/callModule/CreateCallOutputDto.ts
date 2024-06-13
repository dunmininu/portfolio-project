import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("CreateCallOutputDtoObject")
class CreateCallOutputDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    id!: string;

    @Field(() => Date)
    @Type(() => Date)
    callStartTime!: Date;

    @Field(() => Date)
    @Type(() => Date)
    callEndTime!: Date;
}

export { CreateCallOutputDto as CreateCallOutputDto };