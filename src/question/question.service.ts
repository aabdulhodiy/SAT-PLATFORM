import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Topic } from 'src/topic/entities/topic.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Topic)
    private topicRepository: Repository<Topic>
  ) {}

  async create(dto: CreateQuestionDto) {
    const topic = await this.topicRepository.findOne({ where: { id: dto.topic_id } });
    if (!topic) throw new NotFoundException('Topic not found');

    const question = this.questionRepository.create({ ...dto, topic });
    return this.questionRepository.save(question);
  }

  findAll() {
    return this.questionRepository.find({ relations: ['topic'] });
  }

  findOne(id: number) {
    return this.questionRepository.findOne({ where: { id }, relations: ['topic'] });
  }

  async update(id: number, dto: UpdateQuestionDto) {
    const question = await this.questionRepository.findOneBy({ id });
    if (!question) throw new NotFoundException('Question not found');
    Object.assign(question, dto);
    return this.questionRepository.save(question);
  }

  async remove(id: number) {
    const found = await this.questionRepository.findOneBy({ id });
    if (!found) throw new NotFoundException('Question not found');
    return this.questionRepository.remove(found);
  }
}