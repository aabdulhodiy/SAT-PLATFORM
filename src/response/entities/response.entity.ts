import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Question } from 'src/question/entities/question.entity';

@Entity()
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  selected_option: string;

  @Column({ nullable: true })
  selected_answer?: string;

  @Column()
  is_correct: boolean;

  @ManyToOne(() => User, (user) => user.responses, { eager: true })
  user: User;

  @ManyToOne(() => Question, (question) => question.responses, { eager: true })
  question: Question;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}


