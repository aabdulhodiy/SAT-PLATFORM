import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { User } from 'src/user/entities/user.entity';
  import { Question } from 'src/question/entities/question.entity';
  
  @Entity()
  export class QuestionStatistic {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, (user) => user.questionStatistics, { onDelete: 'CASCADE' })
    user: User;
  
    @ManyToOne(() => Question, (question) => question.questionStatistics, { onDelete: 'CASCADE' })
    question: Question;
  
    @Column({ type: 'int', default: 0 })
    attempts: number;
  
    @Column({ type: 'int', default: 0 })
    correct_attempts: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
