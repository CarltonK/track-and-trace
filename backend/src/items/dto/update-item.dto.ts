import { PartialType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';
import { IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './../../users/dto/create-user.dto';
import { CreateUpdateItemAddressDto } from './create-update-item-address.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  @IsOptional()
  address?: CreateUpdateItemAddressDto;

  @IsOptional()
  custodian?: CreateUserDto;

  @IsString()
  @IsOptional()
  title?: string;
}
