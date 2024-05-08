import { TaskService } from './task.service';
import { Controller, Get, Post, Put, Delete, Patch, Body } from "@nestjs/common";

@Controller('/tasks')
export class taskController{

  constructor(private taskService: TaskService){}

  @Get()
  getAllTasks(){
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() task: any){
    return this.taskService.createTasks(task);
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
