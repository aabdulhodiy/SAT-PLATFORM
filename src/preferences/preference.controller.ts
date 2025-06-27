import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Body,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PreferenceService } from './preference.service';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { UpdatePreferenceDto } from './dto/update-preference.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Preferences')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('preferences')
export class PreferenceController {
  constructor(private readonly service: PreferenceService) {}

  @Post()
  @ApiOperation({ summary: 'Create preference' })
  @ApiBody({ type: CreatePreferenceDto })
  create(@Body() dto: CreatePreferenceDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all preferences' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get preference by ID' })
  findOne(@Param('id') id: number) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update preference' })
  @ApiBody({ type: UpdatePreferenceDto })
  update(@Param('id') id: number, @Body() dto: UpdatePreferenceDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete preference' })
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
