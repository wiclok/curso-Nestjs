import { TaskService } from './task.service';
import { Controller, Get, Post, Put, Delete, Patch, Body, Query } from "@nestjs/common";

@Controller('/tasks')
export class taskController{

  constructor(private taskService: TaskService){}

  @Get()
  getAllTasks(@Query() query: any){
    console.log(query)
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
