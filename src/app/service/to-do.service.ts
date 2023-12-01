import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  list: ToDo[] = [];
  constructor() {}

  addToList(item: ToDo) {
    this.list.push(item);
  }
}
