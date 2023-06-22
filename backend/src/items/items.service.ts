import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from './../../services/prisma/prisma.service';
import { Item } from '@prisma/client';

@Injectable()
export class ItemsService {
  constructor(
    @Inject(PrismaService) private readonly _prismaService: PrismaService,
  ) {}
  async create(createItemDto: CreateItemDto): Promise<Item> {
    try {
      const { price, addressId, color, userId } = createItemDto;
      return await this._prismaService.item.create({
        data: { price, color, userId, addressId },
      });
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async findAll(): Promise<Item[]> {
    try {
      return await this._prismaService.item.findMany();
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async findOne(id: number): Promise<Item> {
    try {
      return await this._prismaService.item.findFirst({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    try {
      return await this._prismaService.item.update({
        where: { id },
        data: { ...updateItemDto },
      });
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async remove(id: number): Promise<Item> {
    try {
      return await this._prismaService.item.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }
}
