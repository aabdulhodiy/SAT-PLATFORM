import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePreferenceDto {
  @ApiProperty({ example: 1, description: 'User ID (foydalanuvchi IDsi)' })
  @IsNumber()
  @IsPositive()
  user_id: number;

  @ApiProperty({ example: 2, description: 'Topic ID (mavzu IDsi)' })
  @IsNumber()
  @IsPositive()
  topic_id: number;

  @ApiProperty({ example: 0.85, description: 'Preference score (afzallik balli)' })
  @IsNumber()
  @IsPositive()
  preference_score: number;
}



