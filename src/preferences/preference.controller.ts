import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { PreferenceService } from './preference.service';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { UpdatePreferenceDto } from './dto/update-preference.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Preference')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('preferences')
export class PreferenceController {
  constructor(private readonly preferenceService: PreferenceService) {}

  @Post()
  @ApiOperation({ summary: 'Create preference' })
  create(@Body() dto: CreatePreferenceDto) {
    return this.preferenceService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all preferences' })
  findAll() {
    return this.preferenceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get preference by ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.preferenceService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update preference by ID' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePreferenceDto) {
    return this.preferenceService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete preference by ID' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.preferenceService.remove(id);
  }
}
