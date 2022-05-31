import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    console.log(this.students.find((student) => student.id === studentId));
    console.log(this, studentId);
    console.log(studentId);
    return this.students.find((student) => student.id === studentId);
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    let newStudent = { ...payload, id: uuid() };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(
    payload: UpdateStudentDto,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;
    const existingStudent = this.students.find(
      (student) => student.id === studentId,
    );
    updatedStudent = { ...existingStudent, ...payload };

    this.students = this.students.map((student) =>
      student.id === studentId ? updatedStudent : student,
    );

    return updatedStudent;
  }

  getStudentByTeacherId(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => student.teacher === teacherId);
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updateStudent: StudentResponseDto;
    const existingStudent = this.students.find(
      (student) => student.id === studentId,
    );
    updateStudent = { ...existingStudent, teacher: teacherId };
    this.students = this.students.map((student) =>
      student.id === studentId ? updateStudent : student,
    );

    return updateStudent;
  }
}
