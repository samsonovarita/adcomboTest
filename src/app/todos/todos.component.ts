import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Todo {
  id: string
  title: string
  description?: string
  importance?: string
  deadlineDate?: any
  completed?: boolean
  created?: any
  done?: any
  expired?: boolean
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private router: Router) { }

  tasks: Todo[];
  filter: string;

  ngOnInit() {
    this.filter = 'all';
    const rawtasks = JSON.parse(localStorage['tasks']);

    this.tasks = rawtasks;

    for (let i = 0; i < this.tasks.length - 1; i++) {
      if (this.tasks[i].created <= this.tasks[i + 1].created && this.tasks[i].done === null) {
        console.log('Просрочено!', i)
        this.tasks[i].expired = true
      } else {
        this.tasks[i].expired = false
      }
    }
  }

  onChange(id: string) {
    let updated_tasks = this.tasks.map((item) => {
      let updated_item = item;
      if (updated_item.id == id) {
        updated_item.completed = !updated_item.completed;
        if (updated_item.completed) {
          updated_item.done = new Date();
        } else {
          updated_item.done = null;
        }
      }
      return updated_item;
    });

    this.tasks = updated_tasks;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  removeTodo(id: string) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  editTask(id: number) {
    localStorage.setItem('task', JSON.stringify(this.tasks[id]));
    this.router.navigate(['/edit', id]);
  }

  todosFiltered(): Todo[] {
      
    if (this.filter === 'regular') {
      return this.tasks.filter(todo => todo.importance==='Обычная')
    } else if (this.filter === 'important') {
      return this.tasks.filter(todo => todo.importance==='Важная')
    } else if (this.filter === 'very important') {
      return this.tasks.filter(todo => todo.importance==='Очень важная')
    }
    return this.tasks;
  }

}
