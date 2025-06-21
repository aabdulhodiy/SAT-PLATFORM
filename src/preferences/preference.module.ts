import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preference } from './entities/preference.entity';
import { PreferenceService } from './preference.service';
import { PreferenceController } from './preference.controller';
import { User } from 'src/user/entities/user.entity';
import { Topic } from 'src/topic/entities/topic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Preference, User, Topic])],
  controllers: [PreferenceController],
  providers: [PreferenceService],
})
export class PreferencesModule {}


