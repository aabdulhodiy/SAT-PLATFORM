import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Topic } from 'src/topic/entities/topic.entity';

@Entity()
export class Preference {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.preferences, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Topic, (topic) => topic.preferences, { onDelete: 'CASCADE' })
  topic: Topic;

  @Column({ type: 'float', default: 0 })
  preference_score: number;

  @Column({ nullable: true })
  language: string;

  @Column({ nullable: true })
  theme: string;
}
