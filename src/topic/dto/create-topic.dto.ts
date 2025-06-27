import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTopicDto {
  @ApiProperty({
    example: 'Matematika',
    description: 'Mavzuning nomi',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Matematikaning asosiy tushunchalari, algebra, geometriya va boshqalar.',
    description: 'Mavzu tavsifi (ixtiyoriy)',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}


