import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getAllTeacher(): FindTeacherResponseDto[] {
    return 'Get all teachers';
  }
  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return `Get teacher by id ${teacherId}`;
  }
}
