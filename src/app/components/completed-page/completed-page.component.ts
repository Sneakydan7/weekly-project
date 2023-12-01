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

  await: boolean = false;

  constructor(private srv: ToDoService) {
    this.items = srv.list;
  }

  async ngOnInit() {
    await this.srv.waitSeconds();
    this.await = true;
  }
}
