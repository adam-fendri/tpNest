import { IsString } from "class-validator";
import { IsNotEmpty, Length, MinLength } from "class-validator/types/decorator/decorators";
import { ValidationArguments } from "class-validator/types/validation/ValidationArguments";

export class TodoAddTDO {

  @IsString()
  @IsNotEmpty({
    message:"vous devez specifier une description"
  })
  @Length(3,10,{message:(validationData:ValidationArguments)=>{
    return `la taille de votre ${validationData.property} ${validationData.value} est courte, 
    la taille minimale de ${validationData.property} est ${validationData.constraints[0]} `
  }})
  name: string;

  @IsString()
  @IsNotEmpty({
    message:"vous devez specifier une description"
  })
  @MinLength(10,{message:(validationData:ValidationArguments)=>{
    return `la taille de votre ${validationData.property} ${validationData.value} ne respecte pas les contraintes, 
    la taille de ${validationData.property} doit etre entre ${validationData.constraints[0]} et ${validationData.constraints[1]} `
  }})
  description: string;
}
