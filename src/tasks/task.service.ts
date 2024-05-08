import { Injectable } from "@nestjs/common";

export interface User{
  name: string,
  age: number
}
@Injectable()
export class TaskService{

  // getTasks(): string {
  //   return 'Obteniendo Tareas...'
  // }

  getTasks(): User {
    return {
      name: 'Juan',
      age: 30
    }
  }

  createTasks(){
    return 'Creando Tareas...'
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