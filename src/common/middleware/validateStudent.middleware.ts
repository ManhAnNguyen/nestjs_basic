import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { students } from 'src/db';

@Injectable()
export class ValidateStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const studentId = req.params.studentId;
    const exsistingStudent = students.some(
      (student) => student.id === studentId,
    );
    if (exsistingStudent) {
      next();
    } else {
      throw new HttpException('Student not found', 400);
    }
  }
}
