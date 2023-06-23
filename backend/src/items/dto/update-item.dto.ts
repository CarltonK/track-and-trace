import { PartialType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';
import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class UpdateItemDto extends PartialType(CreateItemDto) {
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
  @IsOptional()
  latitude?: number;

  @IsLongitude()
  @IsNumber()
  @IsOptional()
  longitude?: number;

  @IsString()
  @IsOptional()
  @Matches(
    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  )
  emailAddress: string;

  @IsString()
  @IsOptional()
  title?: string;
}
