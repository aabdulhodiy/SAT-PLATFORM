import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({
    example: '3 + 5 nechiga teng?',
    description: 'Savol matni',
  })
  question_text: string;

  @ApiProperty({
    example: 'https://example.com/images/savol1.png',
    description: 'Savolga oid rasm URL (ixtiyoriy)',
    required: false,
  })
  image_url?: string;

  @ApiProperty({
    example: true,
    description: 'Savol ochiqmi yoki yopiq (true - ochiq)',
  })
  is_open: boolean;

  @ApiProperty({
    example: 1,
    description: 'Topic ID (tegishli fan)',
  })
  topic_id: number;

  @ApiProperty({
    example: ['6', '7', '8', '9'],
    description: 'Javob variantlari',
    type: [String],
  })
  answer_options: string[];

  @ApiProperty({
    example: '8',
    description: 'To‘g‘ri javob',
  })
  correct_answer: string;

  @ApiProperty({
    example: '3 ga 5 ni qo‘shsak 8 bo‘ladi',
    description: 'To‘g‘ri javob tushuntirishi',
  })
  explanation: string;

  @ApiProperty({
    example: 'https://example.com/images/explanation1.png',
    description: 'Tushuntirishga oid rasm URL (ixtiyoriy)',
    required: false,
  })
  photo_explanation_url?: string;

  @ApiProperty({
    example: 'easy',
    description: 'Qiyinchilik darajasi: easy | medium | hard',
  })
  difficulty_level: string;

  @ApiProperty({
    example: 4.5,
    description: 'Foydalanuvchilar bahosi (1.0 - 5.0)',
  })
  rating: number;
}


