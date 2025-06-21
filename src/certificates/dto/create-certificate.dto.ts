import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCertificateDto {
  @ApiProperty({
    example: 1,
    description: 'Foydalanuvchi ID raqami',
  })
  @IsNumber()
  user_id: number;

  @ApiProperty({
    example: 2,
    description: 'Imtihon (Exam) ID raqami',
  })
  @IsNumber()
  exam_id: number;

  @ApiProperty({
    example: 'https://example.com/certificates/user1_exam2.pdf',
    description: 'Certificate fayl manzili (URL)',
  })
  @IsString()
  @IsNotEmpty()
  certificate_url: string;
}
