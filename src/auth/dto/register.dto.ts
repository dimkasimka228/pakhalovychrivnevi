import { IsString, MinLength, IsEnum } from 'class-validator';
import { UserRole } from '../../users/user.entity';

export class RegisterDto {
  @IsString()
  username!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsEnum(UserRole)
  role!: UserRole;
}
