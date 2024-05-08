import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';

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

  createTasks(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    return 'Editando Tareas...';
  }

  deleteTask() {
    return 'Borrando Tareas...';
  }

  updateTaskStatus() {
    return 'Editando el estado de las tareas...';
  }
}
