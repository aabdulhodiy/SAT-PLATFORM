import { IsNumber, IsOptional, IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResponseDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  user_id: number;

  @ApiProperty({ example: 5 })
  @IsNumber()
  question_id: number;

  @ApiProperty({ example: 'B' })
  @IsString()
  selected_option: string;

  @ApiProperty({ example: 'Pythagoras Theorem' })
  @IsOptional()
  @IsString()
  selected_answer?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  is_correct: boolean;
}





