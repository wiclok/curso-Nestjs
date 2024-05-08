import { TaskService } from './task.service';
import { Controller, Get, Post, Put, Delete, Patch } from "@nestjs/common";

@Controller({})
export class taskController{

  constructor(private taskService: TaskService){}

  @Get('/tasks')
  getAllTasks(){
    return this.taskService.getTasks();
  }

  @Post('tasks')
  createTask(){
    return 'Creando Tareas...'
  }

  @Put('/tasks')
  updateTask(){
    return 'Editando Tareas...'
  }

  @Delete()
  deleteTask(){
    return 'Elimando Tareas...'
  }
  @Patch()
  updateTaskStatus(){
    return 'Editando el estado de la tareas...'
  }

}
