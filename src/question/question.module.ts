import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { Question } from './entities/question.entity';
import { Topic } from 'src/topic/entities/topic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Topic])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
