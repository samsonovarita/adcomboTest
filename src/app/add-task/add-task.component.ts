import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { TodoFormComponent } from '../todo-form/todo-form.component'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  
  title: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addTodo() {
    console.log('add to LS');
    console.log()

      
    // localStorage.setItem('Todo', JSON.stringify(TodoFormComponent.todosService.addTodo(todo)));
    // console.log(todo);
    this.router.navigate(['/']);
    // const todo: Todo = {
    //   title: this.title,
    //   id: Date.now(),
    //   completed: false,
    //   date: new Date()
    // }
    // this.todosService.addTodo(todo)
    // this.title = ''
  }

}
