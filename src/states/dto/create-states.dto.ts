import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateStatesDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly _id: string;
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly States: string;

    @IsString()
    @IsNotEmpty()
    readonly Governor: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly Population: string;
    
    @IsString()
    @IsNotEmpty()
    readonly Description: string;

    @IsString()
    @IsNotEmpty()
    readonly LGA: string;

    @IsString()
    @IsNotEmpty()
    readonly LGAs: string;

    @IsString()
    @IsNotEmpty()
    readonly Region: string;
}