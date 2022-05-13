import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { TestHttpService } from '../../services/test-http.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo = new Todo();
  constructor(
    private todoService: TodoService,
    private toastr: ToastrService,
    private testHttpService: TestHttpService
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
    this.toastr.info('Bienvenu :)');
    this.testHttpService.getApi().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
    this.testHttpService.postApi().subscribe((data) => {
      console.log(data);
    });
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
