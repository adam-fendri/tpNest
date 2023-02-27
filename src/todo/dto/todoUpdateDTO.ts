import { ValidationArguments } from 'class-validator';
import { IsIn, IsOptional, Length, MinLength } from 'class-validator/types/decorator/decorators';
import { ErrorMsg } from '../ErrorMsg';
import { TodoStatusEnum } from '../todo.statusenum';


export class TodoUpdateDTO {

  
  @Length(3,10,{message:(validationData:ValidationArguments)=>{
    return ErrorMsg.lenght_error_message(true,true,validationData)}})
  @IsOptional()
  name: string;
  
  @MinLength(10,{message:(validationData:ValidationArguments)=>{
    return `la taille de votre ${validationData.property} ${validationData.value} ne respecte pas les contraintes, 
    la taille de ${validationData.property} doit etre entre ${validationData.constraints[0]} et ${validationData.constraints[1]} `
  }})
  @IsOptional()
  description: string;

  @IsOptional()
  @IsIn(['actif','waiting' ,'done' ])
  status: TodoStatusEnum;
}
