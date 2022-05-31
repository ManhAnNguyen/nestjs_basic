import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }
  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    console.log(studentId);
    return `Get student with id ${studentId}`;
  }
  @Post()
  createNewStudent(@Body() body) {
    console.log(body);
    return `Create new student with following data ${JSON.stringify(body)}`;
  }
  @Put('/:studentId')
  updateStudentById(@Param('studentId') studentId: string, @Body() body) {
    return `update student with id : ${studentId} with following data ${JSON.stringify(
      body,
    )}`;
  }
}
