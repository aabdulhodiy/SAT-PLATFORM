import { ApiProperty } from '@nestjs/swagger';

export class CreateResponseDto {
  @ApiProperty({
    example: 1,
    description: 'Foydalanuvchining ID raqami',
  })
  user_id: number;

  @ApiProperty({
    example: 5,
    description: 'Savol ID raqami',
  })
  question_id: number;

  @ApiProperty({
    example: 'A',
    description: 'Foydalanuvchi tanlagan variant',
  })
  selected_option: string;

  @ApiProperty({
    example: 'Correct answer explanation text',
    description: 'Foydalanuvchining yozgan javobi (agar kerak bo‘lsa)',
    required: false,
  })
  selected_answer?: string;

  @ApiProperty({
    example: true,
    description: 'Javob to‘g‘rimi yoki yo‘qmi',
  })
  is_correct: boolean;
}





