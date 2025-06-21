import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from '../topic/entities/topic.entity';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic)
    private topicRepository: Repository<Topic>,
  ) {}

  async create(createTopicDto: CreateTopicDto): Promise<Topic> {
    const topic = this.topicRepository.create(createTopicDto);
    return this.topicRepository.save(topic);
  }

  async findAll(): Promise<Topic[]> {
    return this.topicRepository.find();
  }

  async findOne(id: number): Promise<Topic> {
    const topic = await this.topicRepository.findOne({ where: { id } });
    if (!topic) throw new NotFoundException('Topic not found');
    return topic;
  }

  async update(id: number, dto: UpdateTopicDto): Promise<Topic> {
    const topic = await this.findOne(id);
    const updated = Object.assign(topic, dto);
    return this.topicRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const topic = await this.findOne(id);
    await this.topicRepository.remove(topic);
  }
}
