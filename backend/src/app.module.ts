import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'services/prisma/prisma.service';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ItemsModule, UsersModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
