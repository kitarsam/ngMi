import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() { }
  logTodos(): void {
    console.log(this.todos);
  }
  getAllTodos(): Todo[]{
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index >= 0 ) {
      this.todos.splice(index, 1);
    }
  }
}
