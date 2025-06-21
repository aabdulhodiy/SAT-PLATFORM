import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateHistoryDto {
  @ApiProperty({
    example: 1,
    description: 'Foydalanuvchi ID raqami',
  })
  @IsNumber()
  user_id: number;

  @ApiProperty({
    example: 3,
    description: 'Imtihon (exam) ID raqami',
  })
  @IsNumber()
  exam_id: number;

  @ApiPropertyOptional({
    example: 78.5,
    description: 'Imtihondan olingan ball (agar mavjud bo‘lsa)',
  })
  @IsOptional()
  @IsNumber()
  score?: number;
}
