import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateUsersDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly username: string;
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}