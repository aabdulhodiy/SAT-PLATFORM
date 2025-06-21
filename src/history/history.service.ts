import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './entities/history.entity';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { User } from 'src/user/entities/user.entity';
import { Exam } from 'src/exam/entities/exam.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private historyRepo: Repository<History>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(Exam)
    private examRepo: Repository<Exam>,
  ) {}

  async create(dto: CreateHistoryDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.user_id } });
    if (!user) throw new NotFoundException('User not found');

    const exam = await this.examRepo.findOne({ where: { id: dto.exam_id } });
    if (!exam) throw new NotFoundException('Exam not found');

    const history = this.historyRepo.create({
      user,
      exam,
      score: dto.score,
    });

    return this.historyRepo.save(history);
  }

  findAll() {
    return this.historyRepo.find({ relations: ['user', 'exam'] });
  }

  async findOne(id: number) {
    const history = await this.historyRepo.findOne({ where: { id }, relations: ['user', 'exam'] });
    if (!history) throw new NotFoundException('History not found');
    return history;
  }

  async update(id: number, dto: UpdateHistoryDto) {
    const history = await this.historyRepo.findOne({ where: { id } });
    if (!history) throw new NotFoundException('History not found');

    if (dto.user_id) {
      const user = await this.userRepo.findOne({ where: { id: dto.user_id } });
      if (!user) throw new NotFoundException('User not found');
      history.user = user;
    }

    if (dto.exam_id) {
      const exam = await this.examRepo.findOne({ where: { id: dto.exam_id } });
      if (!exam) throw new NotFoundException('Exam not found');
      history.exam = exam;
    }

    history.score = dto.score ?? history.score;
    return this.historyRepo.save(history);
  }

  async remove(id: number) {
    const history = await this.historyRepo.findOne({ where: { id } });
    if (!history) throw new NotFoundException('History not found');
    return this.historyRepo.remove(history);
  }
}
