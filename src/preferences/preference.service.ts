import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Preference } from './entities/preference.entity';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { UpdatePreferenceDto } from './dto/update-preference.dto';
import { User } from 'src/user/entities/user.entity';
import { Topic } from 'src/topic/entities/topic.entity';

@Injectable()
export class PreferenceService {
  constructor(
    @InjectRepository(Preference)
    private readonly preferenceRepo: Repository<Preference>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Topic)
    private readonly topicRepo: Repository<Topic>,
  ) {}

  async create(dto: CreatePreferenceDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.user_id } });
    if (!user) throw new NotFoundException('User not found');

    const topic = await this.topicRepo.findOne({ where: { id: dto.topic_id } });
    if (!topic) throw new NotFoundException('Topic not found');

    const preference = this.preferenceRepo.create({
      preference_score: dto.preference_score,
      user,
      topic,
    });
    return this.preferenceRepo.save(preference);
  }

  findAll() {
    return this.preferenceRepo.find({ relations: ['user', 'topic'] });
  }

  async findOne(id: number) {
    const preference = await this.preferenceRepo.findOne({
      where: { id },
      relations: ['user', 'topic'],
    });
    if (!preference) throw new NotFoundException('Preference not found');
    return preference;
  }

  async update(id: number, dto: UpdatePreferenceDto) {
    const preference = await this.preferenceRepo.findOne({ where: { id } });
    if (!preference) throw new NotFoundException('Preference not found');

    if (dto.user_id) {
      const user = await this.userRepo.findOne({ where: { id: dto.user_id } });
      if (!user) throw new NotFoundException('User not found');
      preference.user = user;
    }

    if (dto.topic_id) {
      const topic = await this.topicRepo.findOne({ where: { id: dto.topic_id } });
      if (!topic) throw new NotFoundException('Topic not found');
      preference.topic = topic;
    }

    preference.preference_score = dto.preference_score ?? preference.preference_score;

    return this.preferenceRepo.save(preference);
  }

  async remove(id: number) {
    const preference = await this.preferenceRepo.findOne({ where: { id } });
    if (!preference) throw new NotFoundException('Preference not found');
    return this.preferenceRepo.remove(preference);
  }
}

