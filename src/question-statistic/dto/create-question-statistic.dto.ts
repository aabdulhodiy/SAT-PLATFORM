import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionStatisticDto {
  @ApiProperty({
    example: 1,
    description: 'Foydalanuvchi IDsi',
  })
  user: number;

  @ApiProperty({
    example: 3,
    description: 'Savol IDsi',
  })
  question: number;

  @ApiProperty({
    example: 7,
    description: 'Jami urinishlar soni',
  })
  attempts: number;

  @ApiProperty({
    example: 5,
    description: 'To‘g‘ri urinishlar soni',
  })
  correct_attempts: number;
}


