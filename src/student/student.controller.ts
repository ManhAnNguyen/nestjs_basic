import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return 'All students';
  }
  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return `Get student with id ${studentId}`;
  }
  @Post()
  createNewStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return `Create new student with following data ${JSON.stringify(body)}`;
  }
  @Put('/:studentId')
  updateStudentById(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `update student with id : ${studentId} with following data ${JSON.stringify(
      body,
    )}`;
  }
}
