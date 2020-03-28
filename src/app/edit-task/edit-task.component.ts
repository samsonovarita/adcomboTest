import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const taskID = params.get('taskID');
      console.log(taskID);
    });
  }

}
