import { Component, Input, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls:  ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit{

  @Input() task:Task ={id:0, name: '', description:'',dueDate:''};

  constructor(private taskService:TaskService){}
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.task.id) {
      this.taskService.updateTask(this.task.id, this.task);
    } else {
      this.task.id = Math.floor(Math.random() * 1000); // Mock ID
      this.taskService.addTask(this.task);
    }
    this.task = { id: 0, name: '', description: '', dueDate: '' }; // Reset form
  }

}
