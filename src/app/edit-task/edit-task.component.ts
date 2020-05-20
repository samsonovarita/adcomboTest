import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Todo } from '../todos/todos.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  title: string = '';
  description: string = '';
  importance: string = '';
  deadlineDate: any = '';
  task: Todo;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const taskID = params.get('taskID');

      let todos = JSON.parse(localStorage['tasks']);
     
      this.task = todos.find(task => task.id === taskID)
      console.log(this.task.id);

      this.title = this.task.title;
      this.description = this.task.description;
      this.importance = this.task.importance;
      this.deadlineDate = this.task.deadlineDate;
      // this.title="Hello world";


     
    });
  }
 
  editTodo() {
    // console.log('edit LS');

    const tasks = JSON.parse(localStorage['tasks']);
     
    const taskIndex = tasks.findIndex(task => task.id === this.task.id)
    // console.log(taskIndex)
    tasks[taskIndex].title = this.title;
    tasks[taskIndex].description = this.description;
    tasks[taskIndex].importance = this.importance;
    tasks[taskIndex].deadlineDate = this.deadlineDate;
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // this.route.navigate(['/']);



  //   let array = [0, 1, 2, 3, 4, 4534, 4365342, 0, 12]
  //   console.log(array[4])
  //   array[4] = 12
  //   console.log(array[4])
  }

}
