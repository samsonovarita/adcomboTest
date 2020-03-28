import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import {TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodosService, private router: Router) { }

  ngOnInit() {
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }

  removeTodo(id:number) {
    this.todosService.removeTodo(id)
  }

  editTask(id: number) {
    this.router.navigate(['/edit', id]);
  }

}
