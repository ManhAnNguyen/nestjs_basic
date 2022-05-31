import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from 'src/student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentByTeacherId(
    @Param('teacherId') teacherId: string,
  ): FindStudentResponseDto {
    return `Get students by teachder id ${teacherId}`;
  }
  @Put('/:studentId')
  updateStudentByTeacherId(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ): StudentResponseDto {
    return `update student with id ${studentId} by teacher id ${teacherId} with data of ${JSON.stringify(
      body,
    )}`;
  }
}
