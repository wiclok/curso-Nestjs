import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

export interface User {
  name: string;
  age: number;
}
@Injectable()
export class TaskService {
  private tasks = [];

  // getTasks(): string {
  //   return 'Obteniendo Tareas...'
  // }

  getAllTasks() {
    return this.tasks;
  }

  getTasks(id: number) {
    const taskFound = this.tasks.find(task=> task.id==id)
    if (!taskFound){
      return new NotFoundException(`No se enctró la tarea ${id}`)
    }
    return taskFound;
  }

  createTasks(task: any) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask() {
    return 'Editando Tareas...';
  }

  deleteTask() {
    return 'Borrando Tareas...';
  }

  updateTaskStatus() {
    return 'Editando el estado de las tareas...';
  }
}
