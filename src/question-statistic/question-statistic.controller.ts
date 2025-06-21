import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuestionStatisticService } from './question-statistic.service';
import { CreateQuestionStatisticDto } from './dto/create-question-statistic.dto';
import { UpdateQuestionStatisticDto } from './dto/update-question-statistic.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('question-statistic')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('question-statistic')
export class QuestionStatisticController {
  constructor(private readonly service: QuestionStatisticService) {}

  @Post()
  create(@Body() dto: CreateQuestionStatisticDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateQuestionStatisticDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}

