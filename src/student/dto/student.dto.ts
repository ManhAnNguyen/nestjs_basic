export class CreateStudentDto {
  name: string;
  teacher: string;
}
export class UpdateStudentDto {
  name: string;
  teacher: string;
}
export class FindStudentResponseDto {
  name: string;
  id: string;
  teacher: string;
}
export class StudentResponseDto {
  name: string;
  id: string;
  teacher: string;
}
