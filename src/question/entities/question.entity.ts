import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
  } from 'typeorm';
  import { Topic } from 'src/topic/entities/topic.entity';
  import { QuestionStatistic } from 'src/question-statistic/entities/question-statistic.entity';
  import { Response } from 'src/response/entities/response.entity';

  
  @Entity()
  export class Question {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    question_text: string;
  
    @Column({ nullable: true })
    image_url: string;
  
    @Column({ default: false })
    is_open: boolean;
  
    @ManyToOne(() => Topic, (topic) => topic.questions, { onDelete: 'CASCADE' })
    topic: Topic;


    @OneToMany(() => QuestionStatistic, (stat) => stat.question)
    questionStatistics: QuestionStatistic[];

    @OneToMany(() => Response, (response) => response.question)
    responses: Response[];

  
    @Column('text', { array: true })
    answer_options: string[];
  
    @Column()
    correct_answer: string;
  
    @Column({ nullable: true })
    explanation: string;
  
    @Column({ nullable: true })
    photo_explanation_url: string;
  
    @Column()
    difficulty_level: string;
  
    @Column({ type: 'float', default: 0 })
    rating: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
