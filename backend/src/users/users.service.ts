import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from './../../services/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(
    @Inject(PrismaService) private readonly _prismaService: PrismaService,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this._prismaService.user.create({
        data: { ...createUserDto },
      });
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this._prismaService.user.findMany();
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      return await this._prismaService.user.findFirst({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      return await this._prismaService.user.update({
        where: { id },
        data: { ...updateUserDto },
      });
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async remove(id: number): Promise<User> {
    try {
      return await this._prismaService.user.delete({
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
