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
  export class History {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, (user) => user.histories, { onDelete: 'CASCADE' })
    user: User;
  
    @ManyToOne(() => Exam, (exam) => exam.histories, { onDelete: 'CASCADE' })
    exam: Exam;
  
    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    score: number;
  
    @CreateDateColumn()
    submitted_at: Date;
  }
  