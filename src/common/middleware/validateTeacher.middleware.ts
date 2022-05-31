import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { teachers } from 'src/db';

@Injectable()
export class ValidateTeacherMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const teacherId = req.params.teacherId;
    const existingTeacher = teachers.some(
      (teacher) => teacher.id === teacherId,
    );

    if (existingTeacher) {
      next();
    } else {
      throw new HttpException('Not Found Teacher', 400);
    }
  }
}
