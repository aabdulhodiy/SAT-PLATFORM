import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from '../topic/entities/topic.entity';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Topic])],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}

