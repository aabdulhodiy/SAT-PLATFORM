import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionStatistic } from './entities/question-statistic.entity';
import { CreateQuestionStatisticDto } from './dto/create-question-statistic.dto';
import { UpdateQuestionStatisticDto } from './dto/update-question-statistic.dto';
import { User } from 'src/user/entities/user.entity';
import { Question } from 'src/question/entities/question.entity';

@Injectable()
export class QuestionStatisticService {
  constructor(
    @InjectRepository(QuestionStatistic)
    private repo: Repository<QuestionStatistic>,
  ) {}

  create(dto: CreateQuestionStatisticDto) {
    const statistic = this.repo.create({
      user: { id: dto.user } as User,
      question: { id: dto.question } as Question,
      attempts: dto.attempts,
      correct_attempts: dto.correct_attempts,
    });
    return this.repo.save(statistic);
  }

  findAll() {
    return this.repo.find({ relations: ['user', 'question'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['user', 'question'] });
  }

  async update(id: number, dto: UpdateQuestionStatisticDto) {
    const statistic = await this.repo.findOne({ where: { id } });
    if (!statistic) throw new NotFoundException('Statistic not found');

    const updated = {
      ...statistic,
      ...dto,
      user: dto.user ? ({ id: dto.user } as User) : statistic.user,
      question: dto.question ? ({ id: dto.question } as Question) : statistic.question,
    };

    return this.repo.save(updated);
  }

  async remove(id: number) {
    const result = await this.repo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Not found');
  }
}
  

