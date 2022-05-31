import { Controller, Get, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getAllTeacher() {
    return 'Get all teachers';
  }
  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string) {
    return `Get teacher by id ${teacherId}`;
  }
}
