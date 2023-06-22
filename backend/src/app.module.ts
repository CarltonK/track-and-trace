import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'services/prisma/prisma.service';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ItemModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
