import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Response } from 'express';

@Controller('items')
export class ItemsController {
  constructor(private readonly _itemsService: ItemsService) {}

  @Post()
  @HttpCode(201)
  @Header('Content-Type', 'application/json')
  async create(@Res() res: Response, @Body() createItemDto: CreateItemDto) {
    const item = await this._itemsService.create(createItemDto);
    return res.status(HttpStatus.CREATED).json({
      status: true,
      message: 'Item created successfully',
      item,
    });
  }

  @Get()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async findAll(@Res() res: Response) {
    const items = await this._itemsService.findAll();
    return res.status(HttpStatus.OK).json({
      status: true,
      message: 'Items fetched successfully',
      items,
    });
  }

  @Get(':id')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async findOne(@Res() res: Response, @Param('id') id: string) {
    const item = await this._itemsService.findOne(+id);
    return res.status(HttpStatus.OK).json({
      status: true,
      message: 'Item fetched successfully',
      item,
    });
  }

  @Patch(':id')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    const item = await this._itemsService.update(+id, updateItemDto);
    return res.status(HttpStatus.OK).json({
      status: true,
      message: 'Item updated successfully',
      item,
    });
  }

  @Delete(':id')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async remove(@Res() res: Response, @Param('id') id: string) {
    const item = await this._itemsService.remove(+id);
    return res.status(HttpStatus.OK).json({
      status: true,
      message: 'Item deleted successfully',
      item,
    });
  }
}
