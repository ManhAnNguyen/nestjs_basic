import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }
  @Get('/:studentId')
  getStudentById() {
    return 'Get student by id';
  }
  @Post()
  createNewStudent() {
    return 'Create new student';
  }
  @Put('/:studentId')
  updateStudentById() {
    return 'update student by id';
  }
}
