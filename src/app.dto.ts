import { OneOf } from './oneOf';
import { IsBoolean, IsString, ValidateNested } from 'class-validator';

export class CreatePartDto {
  @ValidateNested()
  @OneOf({
    message: `activities must be in: values`,
  })
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
