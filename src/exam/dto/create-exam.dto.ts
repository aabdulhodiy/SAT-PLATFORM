import { IsInt, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExamDto {
  @ApiProperty({
    example: 1,
    description: 'Foydalanuvchining ID raqami',
  })
  @IsInt()
  user_id: number;

  @ApiProperty({
    example: '2025-06-15T10:00:00.000Z',
    description: 'Imtihon boshlanish vaqti (ISO format)',
  })
  @IsDateString()
  start_time: string;

  @ApiProperty({
    example: '2025-06-15T11:00:00.000Z',
    description: 'Imtihon tugash vaqti (ISO format)',
  })
  @IsDateString()
  end_time: string;

  @ApiProperty({
    example: 85,
    description: 'Imtihondan olingan umumiy ball',
  })
  @IsInt()
  score: number;
}
