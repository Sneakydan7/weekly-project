import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';
import { ToDoService } from 'src/app/service/to-do.service';

@Component({
  selector: 'app-completed-page',
  templateUrl: './completed-page.component.html',
  styleUrls: ['./completed-page.component.scss'],
})
export class CompletedPageComponent implements OnInit {
  items: ToDo[] = [];
  constructor(private srv: ToDoService) {
    this.items = srv.list;
  }

  ngOnInit(): void {
    console.log(this.items);
  }
}
