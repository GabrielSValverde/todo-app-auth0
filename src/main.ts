import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  template: `
    <input [(ngModel)]="title" placeholder="Nova tarefa" />
    <button (click)="addTask()">Adicionar Tarefa</button>
  `
})
export class AddTaskComponent {
  title: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.title.trim()) {
      this.taskService.addTask({ title: this.title, completed: false }).subscribe();
      this.title = '';
    }
  }
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
