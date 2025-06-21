import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { User } from 'src/user/entities/user.entity';
  import { Exam } from 'src/exam/entities/exam.entity';
  
  @Entity()
  export class Certificate {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, (user) => user.certificates, { onDelete: 'CASCADE' })
    user: User;
  
    @ManyToOne(() => Exam, (exam) => exam.certificates, { onDelete: 'CASCADE' })
    exam: Exam;
  
    @Column()
    certificate_url: string;
  
    @CreateDateColumn()
    issued_at: Date;
  }
  