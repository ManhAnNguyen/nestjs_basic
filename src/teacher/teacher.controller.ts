import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getAllTeacher() {
    return 'Get all teachers';
  }
  @Get('/:teacherId')
  getTeacherById() {
    return 'Get teacher by id';
  }
}
