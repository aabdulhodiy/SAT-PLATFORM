import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from './entities/response.entity';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { User } from 'src/user/entities/user.entity';
import { Question } from 'src/question/entities/question.entity';

@Injectable()
export class ResponseService {
  constructor(
    @InjectRepository(Response)
    private readonly responseRepo: Repository<Response>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
  ) {}

  async create(dto: CreateResponseDto) {
    const user = await this.userRepo.findOneBy({ id: dto.user_id });
    if (!user) throw new NotFoundException('User not found');

    const question = await this.questionRepo.findOneBy({ id: dto.question_id });
    if (!question) throw new NotFoundException('Question not found');

    const response = this.responseRepo.create({
      selected_option: dto.selected_option,
      selected_answer: dto.selected_answer,
      is_correct: dto.is_correct,
      user,
      question,
    });

    return this.responseRepo.save(response);
  }

  findAll() {
    return this.responseRepo.find();
  }

  async findOne(id: number) {
    const response = await this.responseRepo.findOne({ where: { id } });
    if (!response) throw new NotFoundException('Response not found');
    return response;
  }

  async update(id: number, dto: UpdateResponseDto) {
    const response = await this.responseRepo.findOne({ where: { id } });
    if (!response) throw new NotFoundException('Response not found');

    if (dto.user_id) {
      const user = await this.userRepo.findOneBy({ id: dto.user_id });
      if (!user) throw new NotFoundException('User not found');
      response.user = user;
    }

    if (dto.question_id) {
      const question = await this.questionRepo.findOneBy({ id: dto.question_id });
      if (!question) throw new NotFoundException('Question not found');
      response.question = question;
    }

    response.selected_option = dto.selected_option ?? response.selected_option;
    response.selected_answer = dto.selected_answer ?? response.selected_answer;
    response.is_correct = dto.is_correct ?? response.is_correct;

    return this.responseRepo.save(response);
  }

  async remove(id: number) {
    const response = await this.responseRepo.findOne({ where: { id } });
    if (!response) throw new NotFoundException('Response not found');
    return this.responseRepo.remove(response);
  }
}


