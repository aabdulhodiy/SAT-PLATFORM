import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionStatisticDto } from './create-question-statistic.dto';

export class UpdateQuestionStatisticDto extends PartialType(CreateQuestionStatisticDto) {}

