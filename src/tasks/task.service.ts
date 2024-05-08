import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService{

  getTasks(){
    return ['Task 1','Task 2', 'Task 3']
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