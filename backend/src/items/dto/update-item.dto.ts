import { PartialType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';
import { IsOptional, IsString } from 'class-validator';
import { ItemAddress, User } from '@prisma/client';

export class UpdateItemDto extends PartialType(CreateItemDto) {
    @IsOptional()
    address?: ItemAddress;

    @IsOptional()
    custodian?: User;

    @IsString()
    @IsOptional()
    title?: string;
}
