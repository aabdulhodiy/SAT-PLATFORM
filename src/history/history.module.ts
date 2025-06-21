import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './entities/history.entity';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { User } from 'src/user/entities/user.entity';
import { Exam } from 'src/exam/entities/exam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History, User, Exam])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}

