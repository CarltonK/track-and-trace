import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUpdateItemAddressDto {
  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  county?: string;

  @IsOptional()
  @IsString()
  town?: string;

  @IsLatitude()
  @IsNumber()
  latitude?: number;

  @IsLongitude()
  @IsNumber()
  longitude?: number;
}
