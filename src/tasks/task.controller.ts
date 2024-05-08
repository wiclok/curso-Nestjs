import { TaskService } from './task.service';
import { Controller, Get, Post, Put, Delete, Patch } from "@nestjs/common";

@Controller('/tasks')
export class taskController{

  constructor(private taskService: TaskService){}

  @Get()
  getAllTasks(){
    return this.taskService.getTasks();
  }

  @Post()
  createTask(){
    return this.taskService.createTasks();
  }

  @Put()
  updateTask(){
    return this.taskService.updateTask();
  }

  @Delete()
  deleteTask(){
    return this.taskService.deleteTask();
  }
  @Patch()
  updateTaskStatus(){
    return this.taskService.updateTaskStatus();
  }

}
