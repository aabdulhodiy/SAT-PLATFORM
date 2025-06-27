// src/preferences/dto/create-preference.dto.ts
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePreferenceDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  user_id: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  topic_id: number;

  @ApiProperty({ example: 0.85, required: false })
  @IsOptional()
  @IsNumber()
  preference_score?: number;

  @ApiProperty({ example: 'en', required: false })
  @IsOptional()
  @IsString()
  language?: string;

  @ApiProperty({ example: 'dark', required: false })
  @IsOptional()
  @IsString()
  theme?: string;
}



