import { OneOf } from './oneOf';
import { IsBoolean, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
export class CreatePartDto {
  @ValidateNested()
  @OneOf({
    message: `values must be in: values`,
  })
  // @Type(() => StringValues) //uncomenting this line. and commenting out the OneOf allows for submitting StringValues types
  values: BooleanValues[] | StringValues[];
}

export class BooleanValues {
  @IsBoolean()
  value: boolean;
}

export class StringValues {
  @IsString()
  value: string;
}

export const ValueArray = [StringValues, BooleanValues];
