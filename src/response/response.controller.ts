import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Response')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Post()
  create(@Body() dto: CreateResponseDto) {
    return this.responseService.create(dto);
  }

  @Get()
  findAll() {
    return this.responseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateResponseDto) {
    return this.responseService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responseService.remove(+id);
  }
}

