import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';
import { ToDoService } from 'src/app/service/to-do.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
  input: string = '';
  counter: number = 0;
  item: ToDo = {
    id: 1,
    title: '',
    completed: false,
  };

  items: ToDo[] = [];

  constructor(private srv: ToDoService) {
    this.items = this.srv.list;
  }

  ngOnInit(): void {}

  addToList() {
    this.item.title = this.input;
    this.item.id = this.item.id += this.counter;
    this.srv.addToList(this.item);
    this.items = this.srv.list;

    console.log(this.item);
    console.log(this.srv.list);

    this.counter++;

    this.input = '';
    this.item = { id: 1, title: '', completed: false };
  }

  handleDone(li: ToDo) {
    li.completed = !li.completed;
    console.log(li);
    console.log(this.items);
    console.log(this.srv.list);
  }
}
