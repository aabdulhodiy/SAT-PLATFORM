import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
