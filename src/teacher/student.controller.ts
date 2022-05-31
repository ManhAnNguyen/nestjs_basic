import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentByTeacherId() {
    return 'Get students by teachder id';
  }
  @Put('/:studentId')
  updateStudentByTeacherId() {
    return 'update student by teacher id';
  }
}
