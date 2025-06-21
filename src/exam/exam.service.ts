import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from './entities/exam.entity';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private readonly examRepo: Repository<Exam>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(dto: CreateExamDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.user_id } });
    if (!user) throw new NotFoundException('User not found');

    const exam = this.examRepo.create({
      start_time: new Date(dto.start_time),
      end_time: new Date(dto.end_time),
      score: dto.score,
      user,
    });
    return this.examRepo.save(exam);
  }

  findAll() {
    return this.examRepo.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    const exam = await this.examRepo.findOne({ where: { id }, relations: ['user'] });
    if (!exam) throw new NotFoundException('Exam not found');
    return exam;
  }

  async update(id: number, dto: UpdateExamDto) {
    const exam = await this.examRepo.findOne({ where: { id } });
    if (!exam) throw new NotFoundException('Exam not found');

    if (dto.user_id) {
      const user = await this.userRepo.findOne({ where: { id: dto.user_id } });
      if (!user) throw new NotFoundException('User not found');
      exam.user = user;
    }

    exam.start_time = dto.start_time ? new Date(dto.start_time) : exam.start_time;
    exam.end_time = dto.end_time ? new Date(dto.end_time) : exam.end_time;
    exam.score = dto.score ?? exam.score;

    return this.examRepo.save(exam);
  }

  async remove(id: number) {
    const exam = await this.examRepo.findOne({ where: { id } });
    if (!exam) throw new NotFoundException('Exam not found');
    return this.examRepo.remove(exam);
  }
}
