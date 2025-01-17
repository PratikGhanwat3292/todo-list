import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskFormComponent], // Declare all components
  imports: [BrowserModule, FormsModule], // Add required modules
  providers: [], // No providers needed for now
  bootstrap: [AppComponent], // Bootstraps the root component
})
export class AppModule {}
