import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateRegionsDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly _id: string;
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly Regions: string;

    @IsString()
    @IsNotEmpty()
    readonly Description: string;

    @IsString()
    @IsNotEmpty()
    readonly States: string;
    
}
