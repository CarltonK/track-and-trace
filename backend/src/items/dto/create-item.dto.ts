import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateItemDto {
  @IsNumber()
  @IsOptional()
  addressId?: number;

  @IsNumber()
  @IsOptional()
  userId?: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsOptional()
  color?: string;
}
