import { Module } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CertificateController } from './certificate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificate } from './entities/certificate.entity';
import { User } from 'src/user/entities/user.entity';
import { Exam } from 'src/exam/entities/exam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Certificate, User, Exam])],
  controllers: [CertificateController],
  providers: [CertificateService],
})
export class CertificatesModule {}

