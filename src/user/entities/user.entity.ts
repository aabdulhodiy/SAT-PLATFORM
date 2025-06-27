import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,OneToMany } from 'typeorm';
import { QuestionStatistic } from 'src/question-statistic/entities/question-statistic.entity';
import { Response } from 'src/response/entities/response.entity';
import { Preference } from 'src/preferences/entities/preference.entity';
import { Exam } from 'src/exam/entities/exam.entity';
import { History } from 'src/history/entities/history.entity';
import { Certificate } from 'src/certificates/entities/certificate.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => QuestionStatistic, (stat) => stat.user)
  questionStatistics: QuestionStatistic[];

  @OneToMany(() => Response, (response) => response.user)
  responses: Response[];

  @OneToMany(() => Preference, (preference) => preference.user)
  preferences: Preference[];

  @OneToMany(() => Exam, (exam) => exam.user)
  exams: Exam[];

  @OneToMany(() => History, (history) => history.user)
  histories: History[];

  @OneToMany(() => Certificate, (cert) => cert.user)
  certificates: Certificate[];

  @Column()
  password: string;

  @Column({ nullable: true })
  profile_info: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

