import {
  Injectable,
  Inject,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { TodoModel } from './todo.model';
import { TodoStatusEnum } from './todo.statusenum';
import { TodoAddTDO } from './todoAddDTO';
import { TodoUpdateDTO } from './todoUpdateDTO';

@Injectable()
export class TodoService {
  private todos = [];
  constructor(@Inject('randomID') private readonly randomID) {}
  getTodos() {
    return this.todos;
  }

  addTodo(todo: TodoAddTDO) {
    if (todo.description == undefined || todo.name == undefined) {
      return new BadRequestException();
    }

    this.todos.push(
      new TodoModel(this.randomID, todo.name, todo.description, 'waiting'),
    );
  }

  findElementById(id: string) {
    return this.todos.find((element) => element.id == id);
  }

  findIndexById(id: string) {
    return this.todos.findIndex((e) => e.id == id);
  }

  getTodoById(id: string) {
    const result = this.findElementById(id);
    if (result == undefined) {
      return new NotFoundException();
    }
    return result;
  }

  deleteTodoById(id: string) {
    const result = this.findElementById(id);
    if (result == undefined) {
      return new NotFoundException();
    }
    return (this.todos = this.todos.filter((element) => element.id != id));
  }

  updateTodoById(id: string, todoup: TodoUpdateDTO) {
    if (
      todoup.description == undefined &&
      todoup.name == undefined &&
      todoup.status == undefined
    ) {
      return new BadRequestException();
    }

    const result = this.findIndexById(id);

    if (result == undefined) {
      return new NotFoundException();
    }
    if (todoup.name != undefined) {
      this.todos[result].name = todoup.name;
    }
    if (todoup.description != undefined) {
      this.todos[result].description = todoup.description;
    }
    if (todoup.status != undefined) {
      this.todos[result].status =
        Object.values(TodoStatusEnum)[
          Object.keys(TodoStatusEnum).indexOf(todoup.status)
        ];
    }
    return this.getTodos();
  }
}
