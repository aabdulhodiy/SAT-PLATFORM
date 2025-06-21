import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TopicModule } from './topic/topic.module';
import { QuestionModule } from './question/question.module';
import { QuestionStatisticModule } from './question-statistic/question-statistic.module';
import { ResponseModule } from './response/response.module';
import { PreferencesModule } from './preferences/preference.module';
import { ExamModule } from './exam/exam.module';
import { HistoryModule } from './history/history.module';
import { CertificatesModule } from './certificates/certificate.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true, 
    }),
    UserModule,
    AuthModule,
    TopicModule,
    QuestionModule,
    QuestionStatisticModule,
    ResponseModule,
    PreferencesModule,
    ExamModule,
    HistoryModule,
    CertificatesModule
  ],
})
export class AppModule {}
