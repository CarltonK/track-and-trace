import { ItemAddress, ItemEvent, User } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateItemDto {
  @IsNumber()
  @IsOptional()
  addressId?: number;

  @IsNumber()
  @IsOptional()
  userId?: number;

  @IsString()
  @IsOptional()
  color?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  price: number;

  @IsOptional()
  address?: ItemAddress;

  @IsOptional()
  custodian?: User;

  @IsOptional()
  events: ItemEvent[];
}
