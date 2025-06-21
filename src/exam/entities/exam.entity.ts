import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
  } from 'typeorm';
  import { User } from 'src/user/entities/user.entity';
  import { History } from 'src/history/entities/history.entity';
  import { Certificate } from 'src/certificates/entities/certificate.entity';
  
  @Entity()
  export class Exam {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, (user) => user.exams, { onDelete: 'CASCADE' })
    user: User;

    @OneToMany(() => History, (history) => history.exam)
    histories: History[];

    @OneToMany(() => Certificate, (cert) => cert.exam)
    certificates: Certificate[];

  
    @Column({ type: 'timestamp' })
    start_time: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    end_time: Date;
  
    @Column({ type: 'int' })
    score: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
