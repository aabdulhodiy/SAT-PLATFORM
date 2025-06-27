// src/response/response.controller.ts
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('Responses')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('response')
export class ResponseController {
  constructor(private readonly service: ResponseService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new response' })
  @ApiBody({ type: CreateResponseDto })
  create(@Body() dto: CreateResponseDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all responses' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one response by ID' })
  findOne(@Param('id') id: number) {
    return this.service.findOne(+id);
  }
}

