import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
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
  await: boolean = false;
  item: ToDo = {
    id: 1,
    title: '',
    completed: false,
  };

  items: ToDo[] = [];

  constructor(private srv: ToDoService) {
    this.items = this.srv.list;
  }

  async ngOnInit() {
    await this.srv.waitSeconds();
    this.await = true;
  }

  async addToList() {
    await this.srv.waitSeconds();
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

  async handleDone(li: ToDo) {
    await this.srv.waitSeconds();
    li.completed = !li.completed;
    console.log(li);
    console.log(this.items);
    console.log(this.srv.list);
  }
}
