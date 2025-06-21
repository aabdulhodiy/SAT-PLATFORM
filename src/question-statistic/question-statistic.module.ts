import { Module } from '@nestjs/common';
import { QuestionStatisticService } from './question-statistic.service';
import { QuestionStatisticController } from './question-statistic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionStatistic } from './entities/question-statistic.entity';
import { User } from 'src/user/entities/user.entity';
import { Question } from 'src/question/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionStatistic, User, Question])],
  controllers: [QuestionStatisticController],
  providers: [QuestionStatisticService],
})
export class QuestionStatisticModule {}

