import { IsEnum,IsEmail, IsNotEmpty, IsNumber, IsString, ValidateNested , MinLength, IsDate} from "class-validator";
import { Type } from "class-transformer";

import { CreateAddressDto } from "./address.dto";
import { EmployeeRole, Status } from "../entities/employee.entity";

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  employeeId:string

  @IsNotEmpty()
 
  dateOfJoining:Date

  @IsNotEmpty()
  @IsNumber()
  experience:number

  @IsEnum(Status)
  status:Status

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsNumber()
  dept_id:number
  
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password:string;

@IsEnum(EmployeeRole)
role:EmployeeRole

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}