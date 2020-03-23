import { Component, OnInit } from '@angular/core';
import {TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  ngOnInit() {
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }

  removeTodo(id:number) {
    this.todosService.removeTodo(id)
  }

  editTask(id: number) {
    console.log(id)
  }

}
