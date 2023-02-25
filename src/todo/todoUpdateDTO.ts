import { TodoStatusEnum } from './todo.statusenum';

export class TodoUpdateDTO {
  name: string;
  description: string;
  status: TodoStatusEnum;
}
