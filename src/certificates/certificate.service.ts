import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certificate } from './entities/certificate.entity';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { User } from 'src/user/entities/user.entity';
import { Exam } from 'src/exam/entities/exam.entity';

@Injectable()
export class CertificateService {
  constructor(
    @InjectRepository(Certificate)
    private repo: Repository<Certificate>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(Exam)
    private examRepo: Repository<Exam>,
  ) {}

  async create(dto: CreateCertificateDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.user_id } });
    if (!user) throw new NotFoundException('User not found');

    const exam = await this.examRepo.findOne({ where: { id: dto.exam_id } });
    if (!exam) throw new NotFoundException('Exam not found');

    const certificate = this.repo.create({
      user,
      exam,
      certificate_url: dto.certificate_url,
    });

    return this.repo.save(certificate);
  }

  findAll() {
    return this.repo.find({ relations: ['user', 'exam'] });
  }

  async findOne(id: number) {
    const cert = await this.repo.findOne({ where: { id }, relations: ['user', 'exam'] });
    if (!cert) throw new NotFoundException('Certificate not found');
    return cert;
  }

  async update(id: number, dto: UpdateCertificateDto) {
    const cert = await this.repo.findOne({ where: { id } });
    if (!cert) throw new NotFoundException('Certificate not found');

    if (dto.user_id) {
      const user = await this.userRepo.findOne({ where: { id: dto.user_id } });
      if (!user) throw new NotFoundException('User not found');
      cert.user = user;
    }

    if (dto.exam_id) {
      const exam = await this.examRepo.findOne({ where: { id: dto.exam_id } });
      if (!exam) throw new NotFoundException('Exam not found');
      cert.exam = exam;
    }

    cert.certificate_url = dto.certificate_url ?? cert.certificate_url;

    return this.repo.save(cert);
  }

  async remove(id: number) {
    const cert = await this.repo.findOne({ where: { id } });
    if (!cert) throw new NotFoundException('Certificate not found');
    return this.repo.remove(cert);
  }
}
