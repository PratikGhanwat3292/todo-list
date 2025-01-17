import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, name: 'Learn Angular', description: 'Understand basics of Angular', dueDate: '2025-01-20' },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(id: number, updatedTask: Task): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

