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
    return this.taskService.createTasks();
  }

  @Put('/tasks')
  updateTask(){
    return this.taskService.updateTask();
  }

  @Delete('/tasks')
  deleteTask(){
    return this.taskService.deleteTask();
  }
  @Patch('/tasks')
  updateTaskStatus(){
    return this.taskService.updateTaskStatus();
  }

}
