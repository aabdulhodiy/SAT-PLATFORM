import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { QuestionStatisticService } from './question-statistic.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Question Statistics')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('question-statistic')
export class QuestionStatisticController {
  constructor(private readonly service: QuestionStatisticService) {}

  @Get()
  @ApiOperation({ summary: 'Get all question statistics' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one statistic by ID' })
  findOne(@Param('id') id: number) {
    return this.service.findOne(+id);
  }
}

