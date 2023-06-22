import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from './../../services/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(PrismaService) private readonly _prismaService: PrismaService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      return 'This action adds a new user';
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async findAll() {
    try {
      return `This action returns all users`;
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async findOne(id: number) {
    try {
      return `This action returns a #${id} user`;
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return `This action updates a #${id} user`;
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }

  async remove(id: number) {
    try {
      return `This action removes a #${id} user`;
    } catch (error) {
      throw new BadRequestException({
        status: false,
        message: error.message,
      });
    }
  }
}
