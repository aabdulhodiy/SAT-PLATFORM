import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Response } from './entities/response.entity';
import { User } from 'src/user/entities/user.entity';
import { Question } from 'src/question/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Response, User, Question])],
  controllers: [ResponseController],
  providers: [ResponseService],
})
export class ResponseModule {}




