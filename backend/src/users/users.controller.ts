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
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  @Header('Content-Type', 'application/json')
  async create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    const user = await this._usersService.create(createUserDto);
    return res.status(HttpStatus.CREATED).json({
      status: true,
      message: 'User account created successfully',
      user,
    });
  }

  @Get()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async findAll(@Res() res: Response) {
    const users = await this._usersService.findAll();
    return res.status(HttpStatus.OK).json({
      status: true,
      message: 'Users fetched successfully',
      users,
    });
  }

  @Get(':id')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async findOne(@Res() res: Response, @Param('id') id: string) {
    const user = await this._usersService.findOne(+id);
    return res.status(HttpStatus.OK).json({
      status: true,
      message: 'User fetched successfully',
      user,
    });
  }

  @Patch(':id')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this._usersService.update(+id, updateUserDto);
    return res.status(HttpStatus.OK).json({
      status: true,
      message: 'User updated successfully',
      user,
    });
  }

  @Delete(':id')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async remove(@Res() res: Response, @Param('id') id: string) {
    const user = await this._usersService.remove(+id);
    return res.status(HttpStatus.OK).json({
      status: true,
      message: 'User deleted successfully',
      user,
    });
  }
}
