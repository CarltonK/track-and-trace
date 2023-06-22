import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from './../../services/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(
    @Inject(PrismaService) private readonly _prismaService: PrismaService,
  ) { }
  async create(createItemDto: CreateItemDto) {
    try {
      return 'This action adds a new item';
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async findAll() {
    try {
      return `This action returns all items`;
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async findOne(id: number) {
    try {
      return `This action returns a #${id} item`;
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    try {
      return `This action updates a #${id} item`;
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async remove(id: number) {
    try {
      return `This action removes a #${id} item`;
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }
}
