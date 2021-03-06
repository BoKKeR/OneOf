import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { ValueArray } from './app.dto';

@ValidatorConstraint({ async: true })
export class OneOfConstraint implements ValidatorConstraintInterface {
  validate(values: any, args: ValidationArguments) {
    return Array.isArray(values)
      ? values.every(item => ValueArray.includes(item))
      : false;
  }
}

export function OneOf(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: OneOfConstraint,
    });
  };
}
