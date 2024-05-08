import { Injectable } from "@nestjs/common";

export interface User{
  name: string,
  age: number
}
@Injectable()
export class TaskService{

  private tasks = [];

  // getTasks(): string {
  //   return 'Obteniendo Tareas...'
  // }

  getAllTasks() {
    return this.tasks
  }

  createTasks(task: any){
    this.tasks.push(task)
    return task
  }

  updateTask(){
    return 'Editando Tareas...'
  }

  deleteTask(){
    return 'Borrando Tareas...'
  }

  updateTaskStatus(){
    return 'Editando el estado de las tareas...'
  }

}