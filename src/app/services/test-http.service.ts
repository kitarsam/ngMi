import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestHttpService {

  constructor(private http: HttpClient) { }

  getApi() {
   return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  postApi() {
    const todo =   {
      "userId": 1,
      "title": "MI",
      "completed": true
    };
      return this.http.post('https://jsonplaceholder.typicode.com/todos', todo);
  }
}
