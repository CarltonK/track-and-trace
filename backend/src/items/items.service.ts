import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from './../../services/prisma/prisma.service';
import { Item, ItemEvent } from '@prisma/client';

@Injectable()
export class ItemsService {
  constructor(
    @Inject(PrismaService) private readonly _prismaService: PrismaService,
  ) {}
  async create(createItemDto: CreateItemDto): Promise<Item> {
    try {
      const { color } = createItemDto;
      let price: any = createItemDto.price;

      price = Number(price);
      return await this._prismaService.item.create({
        data: {
          color,
          price,
          events: {
            create: { title: 'Item created' },
          },
        },
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
      return await this._prismaService.item.findMany({
        include: {
          address: true,
          custodian: true,
          events: { orderBy: { createdAt: 'desc' } },
        },
      });
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
        include: {
          address: true,
          custodian: true,
          events: { orderBy: { createdAt: 'desc' } },
        },
      });
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async findItemEvents(id: number): Promise<ItemEvent[]> {
    try {
      return await this._prismaService.itemEvent.findMany({
        where: { item: { id } },
        orderBy: { createdAt: 'desc' },
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
      const { color, title, emailAddress } = updateItemDto;
      let price: any | undefined  = updateItemDto.price;

      if (price) price = Number(price);
      const { country, county, town, latitude, longitude } = updateItemDto;
      const address: Record<string, any> | undefined = {
        country,
        county,
        town,
        latitude,
        longitude,
      };

      return await this._prismaService.item.update({
        where: { id },
        data: {
          price,
          color,
          address: address
            ? {
                create: { ...address },
              }
            : undefined,
          custodian: emailAddress
            ? {
                connectOrCreate: {
                  create: { emailAddress },
                  where: { emailAddress },
                },
              }
            : undefined,
          events: {
            create: { title: title ? title : 'Item updated' },
          },
        },
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
