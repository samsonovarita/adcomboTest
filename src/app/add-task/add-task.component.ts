import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  
  title: string = '';
  description: string = '';
  importance: string = ''.toLowerCase();
  deadlineDate: any = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addTodo() {
    console.log('add to LS');

    let tasks = [];
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push({
      'id': Math.random().toString(36),
      'title': this.title,
      'description': this.description,
      'importance': this.importance,
      'deadlineDate': this.deadlineDate,
      'completed': false,
      'created': new Date(),
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    this.router.navigate(['/']);
    this.title = '',
    this.description = '',
    this.importance = '',
    this.deadlineDate = ''
  }

}
