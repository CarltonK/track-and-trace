import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsNotEmpty()
  price: string;
}
