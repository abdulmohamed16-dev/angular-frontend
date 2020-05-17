import { Injectable } from "@angular/core";
import { Todo } from "./todo";
//import { Headers, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class TodoService {
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getTodos(): Promise<Todo[]> {
    return this.http
      .get(this.baseUrl + "/api/stock/")
      .toPromise()
      .then((response) => response as Todo[])
      .catch(this.handleError);
  }

  createTodo(todoData: Todo): Promise<Todo> {
    return this.http
      .post(this.baseUrl + "/api/stock/", todoData)
      .toPromise()
      .then((response) => response as Todo)
      .catch(this.handleError);
  }

  updateTodo(todoData: Todo): Promise<Todo> {
    return this.http
      .put(this.baseUrl + "/api/stock/" + todoData.id, todoData)
      .toPromise()
      .then((response) => response as Todo)
      .catch(this.handleError);
  }

  deleteTodo(id: string): Promise<any> {
    return this.http
      .delete(this.baseUrl + "/api/stock/" + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Some error occured", error);
    return Promise.reject(error.message || error);
  }
}
