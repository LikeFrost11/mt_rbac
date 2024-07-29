import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export default class PermissionDTO {
  @IsNotEmpty()
  @IsString()
  perm_desc!: string;

  @IsNotEmpty()
  @IsNumber()
  group_id!: number;

  @IsNotEmpty()
  @IsNumber()
  operate!: number;
}
