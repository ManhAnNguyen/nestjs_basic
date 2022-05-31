import { Controller, Get, Put, Param, Body } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentByTeacherId(@Param('teacherId') teacherId: string) {
    return `Get students by teachder id ${teacherId}`;
  }
  @Put('/:studentId')
  updateStudentByTeacherId(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ) {
    return `update student with id ${studentId} by teacher id ${teacherId} with data of ${JSON.stringify(
      body,
    )}`;
  }
}
