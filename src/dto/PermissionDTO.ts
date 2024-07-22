import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export default class PermissionDTO {
  @IsNotEmpty()
  @IsString()
  permDesc!: string;

  @IsNotEmpty()
  @IsNumber()
  groupId!: number;

  @IsNotEmpty()
  @IsNumber()
  operate!: number;
}
