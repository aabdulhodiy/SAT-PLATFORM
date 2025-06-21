import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn } from 'typeorm';
import { Question } from 'src/question/entities/question.entity';
import { Preference } from 'src/preferences/entities/preference.entity';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Question, (question) => question.topic)
  questions: Question[];

  @OneToMany(() => Preference, (preference) => preference.topic)
  preferences: Preference[];
  

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

